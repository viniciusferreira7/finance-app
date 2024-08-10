import { CategoryDetails } from './components'

interface CategoryProps {
  params: {
    id: string
  }
}

export default function CategoryPage({ params }: CategoryProps) {
  return (
    <main className="p-4 pt-6">
      <div className="mb-4 flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">
          Identifier: {params.id}
        </h1>
      </div>
      <CategoryDetails />
    </main>
  )
}
