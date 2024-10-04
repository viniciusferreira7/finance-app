import { dehydrate } from '@tanstack/query-core'
import { HydrationBoundary } from '@tanstack/react-query'
import { Metadata } from 'next'

import { getQueryClient } from '@/lib/get-query-client'
import type { SearchParams } from '@/models/pagination'
import { fetchCategories } from '@/services/categories'
import { getQueryKeys } from '@/utils/search-params/get-query-keys'

import { CategoriesFilters, CategoriesTable } from './components'

export const metadata: Metadata = {
  title: 'Categories',
}

interface CategoriesPageProps {
  searchParams: Omit<SearchParams, 'value'> & {
    description?: string
  }
}

export default function CategoriesPage({ searchParams }: CategoriesPageProps) {
  const queryClient = getQueryClient()

  const queryKeys = getQueryKeys(searchParams)

  queryClient.prefetchQuery({
    queryKey: ['fetch-categories', queryKeys],
    queryFn: () =>
      fetchCategories({
        searchParams,
      }),
  })

  return (
    <main className="p-4 pt-6">
      <div className="mb-4 flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Categories</h1>
      </div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <CategoriesFilters />
        <CategoriesTable />
      </HydrationBoundary>
    </main>
  )
}
