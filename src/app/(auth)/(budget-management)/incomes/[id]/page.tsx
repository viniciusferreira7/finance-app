import { dehydrate } from '@tanstack/query-core'
import { HydrationBoundary } from '@tanstack/react-query'

import { getQueryClient } from '@/lib/get-query-client'
import { getIncome } from '@/services/incomes'

import { IncomeDetails } from './components'

interface IncomesProps {
  params: {
    id: string
  }
}

export default async function IncomePage({ params }: IncomesProps) {
  const queryClient = getQueryClient()

  queryClient.prefetchQuery({
    queryKey: ['get-income', 'id', params.id],
    queryFn: () =>
      getIncome({
        params,
      }),
  })

  return (
    <main className="p-4 pt-6">
      <div className="mb-4 flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">
          Identifier: {params.id}
        </h1>
      </div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <IncomeDetails />
      </HydrationBoundary>
    </main>
  )
}
