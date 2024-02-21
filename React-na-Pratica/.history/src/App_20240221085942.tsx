import { Plus } from "lucide-react"
import { Header } from "./components/header"

export function App() {
  return (
    <div className="py-10 space-y-8">
      <div>
        <Header />
        <Tag
      </div>
      <main className="max-w-6xl mx-auto space-y-5 ">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold">Tags</h1>
          <button className="inline-flex items-center gap-1.5 text-xs bg-teal-400 text-teal-950 font-medium rounded-full px-2 py-2 hover:bg-teal-200">
            <Plus className="size-3" />
            Create new Item
          </button>
        </div>
      </main>
    </div>
  )
}
