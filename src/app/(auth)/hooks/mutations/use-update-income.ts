'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { updateIncome, UpdateIncomeParams } from '@/services/incomes'
import { queryFnWrapper } from '@/utils/error/query-fn-wrapper'

export const useUpdateIncome = () => {
  const query = useQueryClient()

  return useMutation({
    mutationKey: ['update-income'],
    mutationFn: async (payload: UpdateIncomeParams) => {
      toast.info('Updating the income')

      return await queryFnWrapper(updateIncome, payload)
    },
    onSuccess: () => {
      query.resetQueries({
        queryKey: ['fetch-incomes'],
      })
      toast.success('Income was updated successfully.')
    },
    onSettled: () => {
      query.invalidateQueries()
    },
  })
}
