import { FileDown, Plus, Search, MoreHorizontal } from "lucide-react"
import { Header } from "./components/header"
import { Tabs } from "./components/tabs"
import { Button } from "./components/ui/button"
import { Control, Input } from "./components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./components/ui/table"
import { useQuery } from "@tanstack/react-query"
import { Pagination } from "./components/pagination"
import {useSearchParams, } from 'react-router-dom'

export interface TagResponse {
  first: number
  prev: number | null
  next: number
  last: number
  pages: number
  items: number
  data: Tag[]
}

export interface Tag {
  title: string
  slug: string
  amountOfVideos: number
  id: string
}

export function App() {
  const [searchParams, setSearchParams] = useSearchParams()
  const urlFilter = searchParams.get("filter") ?? ""

  const [filter, setFilter] = useState(urlFilter)

  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1
  const {data: tagsResponse, isLoading} = useQuery<TagResponse>({
    queryKey: ["get-tags"],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3333/tags?_page=1&_per_page=10`)
      const data = await response.json()

      return data
    },
  })

  if (isLoading) {
    return null
  }

  return (
    <div className="py-10 space-y-8">
      <div>
        <Header />
        <Tabs />
      </div>
      <main className="max-w-6xl mx-auto space-y-5 ">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold">Tags</h1>
          <Button variant="primary">
            <Plus className="size-3" />
            Create new Item
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <Input variant="filter">
            <Search className="size-3" />
            <Control placeholder="Search Tags..." />
          </Input>
          <Button>
            <FileDown className="size-3" />
            Exports
          </Button>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead>Tag</TableHead>
              <TableHead>Amount of Videos</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tagsResponse?.data.map((tag) => {
              return (
                <TableRow key={tag.id}>
                  <TableCell></TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-medium">{tag.title}</span>
                      <span className="text-xs text-zinc-500">{tag.id}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-zinc-300">
                    {tag.amountOfVideos}Video(s)
                  </TableCell>
                  <TableCell className="text-right">
                    <Button size="icon">
                      <MoreHorizontal className="size-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
        {tagsResponse && (
          <Pagination
            pages={tagsResponse.pages}
            items={tagsResponse.items}
            page={1}
          />
        )}
      </main>
    </div>
  )
}
