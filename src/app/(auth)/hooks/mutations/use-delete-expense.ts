'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { deleteExpense, DeleteExpenseParams } from '@/services/expenses'
import { FetchExpensesResponse } from '@/services/expenses/fetch-expenses'
import { queryFnWrapper } from '@/utils/error/query-fn-wrapper'

export const useDeleteExpense = () => {
  const query = useQueryClient()

  function deleteExpenseCached(expenseId: string) {
    const expenseListCache = query.getQueriesData<FetchExpensesResponse>({
      queryKey: ['fetch-expenses'],
    })
    expenseListCache.forEach(([cacheKey, cacheData]) => {
      if (!cacheData) {
        return
      }

      query.setQueryData<FetchExpensesResponse>(cacheKey, {
        ...cacheData,
        results: cacheData?.results.filter(
          (expense) => expense.id !== expenseId,
        ),
      })
    })
  }
  return useMutation({
    mutationKey: ['delete-expense'],
    mutationFn: async (params: DeleteExpenseParams) => {
      toast.info('Deleting the expense')

      return await queryFnWrapper(deleteExpense, params)
    },
    onSuccess: (_, { params }) => {
      query.resetQueries({
        queryKey: ['get-metrics-monthly-for-cards'],
      })
      query.resetQueries({
        queryKey: ['get-metrics'],
      })
      toast.success('Expense was deleted successfully.')

      deleteExpenseCached(params.id)
    },
    onSettled: () => {
      query.invalidateQueries()
    },
  })
}
