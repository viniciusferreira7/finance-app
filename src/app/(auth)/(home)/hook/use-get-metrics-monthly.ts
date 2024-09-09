'use client'

import { useQueries } from '@tanstack/react-query'

import { getBalance } from '@/services/balance'
import { getMetricsMonthlyExpenses } from '@/services/expenses'
import { getMetricsMonthlyIncomes } from '@/services/incomes'
import { queryFnWrapper } from '@/utils/error/query-fn-wrapper'

export const useGetMetricsMonthly = () => {
  const queries = useQueries({
    queries: [
      {
        queryKey: ['get-metrics-monthly-incomes'],
        queryFn: async () => queryFnWrapper(getMetricsMonthlyIncomes, {}),
      },
      {
        queryKey: ['get-metrics-monthly-expenses'],
        queryFn: async () => queryFnWrapper(getMetricsMonthlyExpenses, {}),
      },
      {
        queryKey: ['get-balance'],
        queryFn: async () => queryFnWrapper(getBalance, {}),
      },
    ],
  })

  return queries
}
