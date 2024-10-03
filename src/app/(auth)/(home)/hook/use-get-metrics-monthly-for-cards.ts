'use client'

import { useQueries } from '@tanstack/react-query'

import { getBalance } from '@/services/balance'
import { getMetricsMonthlyExpenses } from '@/services/expenses'
import { getMetricsMonthlyIncomes } from '@/services/incomes'
import { queryFnWrapper } from '@/utils/error/query-fn-wrapper'

export const useGetMetricMonthlyForCards = () => {
  const queries = useQueries({
    queries: [
      {
        queryKey: ['get-metrics-monthly-for-cards'],
        queryFn: async () => queryFnWrapper(getMetricsMonthlyIncomes, {}),
      },
      {
        queryKey: ['get-metrics-monthly-for-cards'],
        queryFn: async () => queryFnWrapper(getMetricsMonthlyExpenses, {}),
      },
      {
        queryKey: ['get-metrics-monthly-for-cards'],
        queryFn: async () => queryFnWrapper(getBalance, {}),
      },
    ],
  })

  return queries
}
