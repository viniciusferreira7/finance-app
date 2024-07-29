'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { updateExpense, UpdateExpenseParams } from '@/services/expenses'
import { FetchExpensesResponse } from '@/services/expenses/fetch-expenses'
import { queryFnWrapper } from '@/utils/error/query-fn-wrapper'

export const useUpdateExpense = () => {
  const query = useQueryClient()

  function updateExpenseCached(
    expenseId: string,
    data: UpdateExpenseParams['payload'],
  ) {
    const expenseListCache = query.getQueriesData<FetchExpensesResponse>({
      queryKey: ['fetch-expenses'],
    })
    expenseListCache.forEach(([cacheKey, cacheData]) => {
      if (!cacheData) {
        return
      }

      query.setQueryData<FetchExpensesResponse>(cacheKey, {
        ...cacheData,
        results: cacheData?.results.map((expense) => {
          if (expense.id === expenseId) {
            return { ...expense, ...data }
          }

          return expense
        }),
      })
    })
  }

  return useMutation({
    mutationKey: ['update-expense'],
    mutationFn: async (params: UpdateExpenseParams) => {
      toast.info('Updating the expense')

      return await queryFnWrapper(updateExpense, params)
    },
    onSuccess: (_, { params, payload }) => {
      toast.success('Expense was updated successfully.')

      updateExpenseCached(params.id, payload)
    },
    onSettled: () => {
      query.invalidateQueries()
    },
  })
}
