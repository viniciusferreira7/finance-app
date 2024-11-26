'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { deleteIncome, DeleteIncomeParams } from '@/services/incomes'
import { FetchIncomesResponse } from '@/services/incomes/fetch-incomes'
import { queryFnWrapper } from '@/utils/error/query-fn-wrapper'

export const useDeleteIncome = () => {
  const query = useQueryClient()

  function deleteIncomeCached(incomeId: string) {
    const incomeListCache = query.getQueriesData<FetchIncomesResponse>({
      queryKey: ['fetch-incomes'],
    })
    incomeListCache.forEach(([cacheKey, cacheData]) => {
      if (!cacheData) {
        return
      }

      query.setQueryData<FetchIncomesResponse>(cacheKey, {
        ...cacheData,
        results: cacheData?.results.filter((income) => income.id !== incomeId),
      })
    })
  }
  return useMutation({
    mutationKey: ['delete-income'],
    mutationFn: async (params: DeleteIncomeParams) => {
      toast.info('Deleting the income')

      return await queryFnWrapper(deleteIncome, params)
    },
    onSuccess: (_, { params }) => {
      query.resetQueries({
        queryKey: ['get-metrics-monthly-for-cards'],
      })
      query.resetQueries({
        queryKey: ['get-metrics'],
      })
      toast.success('Income was deleted successfully.')

      deleteIncomeCached(params.id)
    },
    onSettled: () => {
      query.invalidateQueries()
    },
  })
}
