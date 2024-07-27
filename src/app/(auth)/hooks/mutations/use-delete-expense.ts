'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { deleteExpense, DeleteExpenseParams } from '@/services/expenses'
import { queryFnWrapper } from '@/utils/error/query-fn-wrapper'

export const useDeleteExpense = () => {
  const query = useQueryClient()

  return useMutation({
    mutationKey: ['delete-expense'],
    mutationFn: async (params: DeleteExpenseParams) => {
      toast.info('Deleting the expense')

      return await queryFnWrapper(deleteExpense, params)
    },
    onSuccess: () => {
      query.resetQueries({
        queryKey: ['fetch-expenses'],
      })
      toast.success('Expense was deleted successfully.')
    },
    onSettled: () => {
      query.invalidateQueries()
    },
  })
}
