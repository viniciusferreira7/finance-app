import { dehydrate } from '@tanstack/query-core'
import { HydrationBoundary } from '@tanstack/react-query'
import { Metadata } from 'next'

import { getQueryClient } from '@/lib/get-query-client'
import { getBalance } from '@/services/balance'
import { getMetricsMonthlyExpenses } from '@/services/expenses'
import { getMetricsMonthlyIncomes } from '@/services/incomes'
import {
  getMetrics,
  type GetMetricsParams,
} from '@/services/metrics/get-metrics'

import { Charts } from './components/charts'
import { MetricsCards } from './components/metric-cards'

export const metadata: Metadata = {
  title: 'Home',
}

interface HomeProps {
  searchParams: {
    endDate?: string
  }
}

export default async function Home({ searchParams }: HomeProps) {
  const queryClient = getQueryClient()

  const params: GetMetricsParams = {
    endDate: searchParams.endDate,
  }

  queryClient.prefetchQuery({
    queryKey: ['get-metrics', params],
    queryFn: () => getMetrics(params),
  })

  queryClient.prefetchQuery({
    queryKey: ['get-metrics-monthly-for-cards'],
    queryFn: () => getMetricsMonthlyIncomes(),
  })
  queryClient.prefetchQuery({
    queryKey: ['get-metrics-monthly-for-cards'],
    queryFn: () => getMetricsMonthlyExpenses(),
  })
  queryClient.prefetchQuery({
    queryKey: ['get-metrics-monthly-for-cards'],
    queryFn: () => getBalance(),
  })

  return (
    <div className="space-y-10 p-4">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <MetricsCards />
        <Charts />
      </HydrationBoundary>
    </div>
  )
}
