import { Metadata } from 'next'

import { CategoriesFilters, CategoriesTable } from './components'

export const metadata: Metadata = {
  title: 'Categories',
}

export default function CategoriesPage() {
  return (
    <main className="p-4 pt-6">
      <div className="mb-4 flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Categories</h1>
      </div>
      <CategoriesFilters />
      <CategoriesTable />
    </main>
  )
}
