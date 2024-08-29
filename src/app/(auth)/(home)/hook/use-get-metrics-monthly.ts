'use client'

import { useQueries } from '@tanstack/react-query'

import { getMetricsMonthlyIncomes } from '@/services/incomes'
import { queryFnWrapper } from '@/utils/error/query-fn-wrapper'

export const useGetMetricsMonthly = () => {
  const queries = useQueries({
    queries: [
      {
        queryKey: ['get-metrics-monthly-incomes'],
        queryFn: async () => queryFnWrapper(getMetricsMonthlyIncomes, {}),
      },
    ],
  })

  return queries
}
