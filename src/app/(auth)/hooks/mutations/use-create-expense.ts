'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import {
  createExpense,
  CreateExpensePayload,
} from '@/services/expenses/create-expense'
import { queryFnWrapper } from '@/utils/error/query-fn-wrapper'

export const useCreateExpense = () => {
  const query = useQueryClient()

  return useMutation({
    mutationKey: ['create-expense'],
    mutationFn: async (payload: CreateExpensePayload) => {
      toast.info('Creating the expense')

      return await queryFnWrapper(createExpense, payload)
    },
    onSuccess: () => {
      toast.success('Expense was created successfully.')
    },
    onSettled: () => {
      query.invalidateQueries()
    },
  })
}
