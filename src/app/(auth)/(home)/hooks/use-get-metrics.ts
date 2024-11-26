'use client'

import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'

import {
  getMetrics,
  type GetMetricsParams,
} from '@/services/metrics/get-metrics'
import { queryFnWrapper } from '@/utils/error/query-fn-wrapper'

export const useGetMetrics = () => {
  const searchParams = useSearchParams()

  const params: GetMetricsParams = {
    endDate: searchParams.get('endDate') ?? undefined,
  }

  const query = useQuery({
    queryKey: ['get-metrics', params],
    queryFn: async () =>
      queryFnWrapper(getMetrics, {
        endDate: searchParams.get('endDate') ?? undefined,
      }),
  })

  return query
}
