'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { updateIncome, UpdateIncomeParams } from '@/services/incomes'
import { FetchIncomesResponse } from '@/services/incomes/fetch-incomes'
import { queryFnWrapper } from '@/utils/error/query-fn-wrapper'

export const useUpdateIncome = () => {
  const query = useQueryClient()

  function updateIncomeCached(
    incomeId: string,
    data: UpdateIncomeParams['payload'],
  ) {
    const incomeListCache = query.getQueriesData<FetchIncomesResponse>({
      queryKey: ['fetch-incomes'],
    })
    incomeListCache.forEach(([cacheKey, cacheData]) => {
      if (!cacheData) {
        return
      }

      query.setQueryData<FetchIncomesResponse>(cacheKey, {
        ...cacheData,
        results: cacheData?.results.map((income) => {
          if (income.id === incomeId) {
            return { ...income, ...data, updated_at: new Date().toISOString() }
          }

          return income
        }),
      })
    })
  }

  return useMutation({
    mutationKey: ['update-income'],
    mutationFn: async (params: UpdateIncomeParams) => {
      toast.info('Updating the income')

      return await queryFnWrapper(updateIncome, params)
    },
    onSuccess: (_, { params, payload }) => {
      query.resetQueries({
        queryKey: ['get-metrics-monthly-for-cards'],
      })
      query.resetQueries({
        queryKey: ['get-metrics'],
      })
      toast.success('Income was updated successfully.')

      updateIncomeCached(params.id, payload)
    },
    onSettled: () => {
      query.invalidateQueries()
    },
  })
}
