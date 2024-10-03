'use client'

import { useQuery } from '@tanstack/react-query'

import { getMetrics } from '@/services/metrics/get-metrics'
import { queryFnWrapper } from '@/utils/error/query-fn-wrapper'
import { useSearchParams } from 'next/navigation'

export const useGetMetrics = () => {
  const searchParams = useSearchParams()

  const query = useQuery({
    queryKey: ['get-metrics-monthly-incomes'],
    queryFn: async () => queryFnWrapper(getMetrics, {
      endDate: searchParams.get('endDate') ?? undefined,
    }),
  },)

  return query
}
