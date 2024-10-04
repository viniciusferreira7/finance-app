import { dehydrate } from '@tanstack/query-core'
import { HydrationBoundary } from '@tanstack/react-query'
import { Metadata } from 'next'

import { getQueryClient } from '@/lib/get-query-client'
import type { SearchParams } from '@/models/pagination'
import { fetchCategories } from '@/services/categories'
import { fetchExpenses } from '@/services/expenses'
import { getQueryKeys } from '@/utils/search-params/get-query-keys'

import { ExpensesFilters, ExpensesTable } from './components'

export const metadata: Metadata = {
  title: 'Expenses',
}

interface ExpensesPageProps {
  searchParams: SearchParams
}

export default async function ExpensesPage({
  searchParams,
}: ExpensesPageProps) {
  const queryClient = getQueryClient()

  const queryKeys = getQueryKeys(searchParams)

  queryClient.prefetchQuery({
    queryKey: ['fetch-expenses', queryKeys],
    queryFn: () =>
      fetchExpenses({
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
        <h1 className="text-3xl font-bold tracking-tight">Expenses</h1>
      </div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ExpensesFilters />
        <ExpensesTable />
      </HydrationBoundary>
    </main>
  )
}
