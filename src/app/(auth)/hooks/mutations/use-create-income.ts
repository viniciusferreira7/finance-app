'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { createIncome, CreateIncomePayload } from '@/services/incomes'
import { queryFnWrapper } from '@/utils/error/query-fn-wrapper'

export const useCreateIncome = () => {
  const query = useQueryClient()

  return useMutation({
    mutationKey: ['create-income'],
    mutationFn: async (payload: CreateIncomePayload) => {
      toast.info('Creating the income')

      return await queryFnWrapper(createIncome, payload)
    },
    onSuccess: () => {
      query.resetQueries({
        queryKey: ['fetch-incomes'],
      })
      toast.success('Income was created successfully.')
    },
    onSettled: () => {
      query.invalidateQueries()
    },
  })
}
