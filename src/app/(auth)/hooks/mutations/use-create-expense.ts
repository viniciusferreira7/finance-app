'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import {
  createExpense,
  CreateExpensePayload,
} from '@/services/expense/create-expense'
import { queryFnWrapper } from '@/utils/error/query-fn-wrapper'

export const useCreateExpense = () => {
  const query = useQueryClient()

  return useMutation({
    mutationKey: ['create-expense'],
    mutationFn: (payload: CreateExpensePayload) =>
      queryFnWrapper(createExpense, payload),
    onSuccess: async () => {
      toast.success('Expense was created successfully.')
    },
    onSettled: () => {
      query.invalidateQueries()
    },
  })
}
