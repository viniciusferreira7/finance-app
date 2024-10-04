import { dehydrate } from '@tanstack/query-core'
import { HydrationBoundary } from '@tanstack/react-query'
import { Metadata } from 'next'

import { getQueryClient } from '@/lib/get-query-client'
import type { SearchParams } from '@/models/pagination'
import { fetchCategories } from '@/services/categories'
import { fetchIncomes } from '@/services/incomes'
import { getQueryKeys } from '@/utils/search-params/get-query-keys'

import { IncomesFilters, IncomesTable } from './components'

export const metadata: Metadata = {
  title: 'Incomes',
}

interface IncomesPageProps {
  searchParams: SearchParams
}

export default async function IncomesPage({ searchParams }: IncomesPageProps) {
  const queryClient = getQueryClient()

  const queryKeys = getQueryKeys(searchParams)

  queryClient.prefetchQuery({
    queryKey: ['fetch-incomes', queryKeys],
    queryFn: () =>
      fetchIncomes({
        searchParams,
      }),
  })

  queryClient.prefetchQuery({
    queryKey: ['fetch-categories'],
    queryFn: () => fetchCategories(),
  })

  return (
    <main className="p-4 pt-6">
      <div className="mb-4 flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Incomes</h1>
      </div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <IncomesFilters />
        <IncomesTable />
      </HydrationBoundary>
    </main>
  )
}
