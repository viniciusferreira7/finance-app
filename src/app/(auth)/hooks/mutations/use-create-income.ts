'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import {
  createIncome,
  CreateIncomePayload,
} from '@/services/income/create-income'
import { queryFnWrapper } from '@/utils/error/query-fn-wrapper'

export const useCreateIncome = () => {
  const query = useQueryClient()

  return useMutation({
    mutationKey: ['create-income'],
    mutationFn: (payload: CreateIncomePayload) =>
      queryFnWrapper(createIncome, payload),
    onSuccess: async () => {
      toast.success('Income was created successfully.')
    },
    onSettled: () => {
      query.invalidateQueries()
    },
  })
}
