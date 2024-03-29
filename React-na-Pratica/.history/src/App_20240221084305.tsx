import { Plus } from 'lucide-react'

export function App() {
  return (
    <div className="py-10 space-y-8">
      <div></div>
      <main className="max-w-6xl mx-auto space-y-5 ">
        <h1 className="text-xl font-bold">Tags</h1>
        <button className="inline-flex items-center gap-1.5 text-xs bg-teal-300 text-teal-950 font-medium rounded-full px-2 py-2 hover:bg-teal-">
          <Plus className="size-3" />
          Create new Item
        </button>
      </main>
    </div>
  )
}
