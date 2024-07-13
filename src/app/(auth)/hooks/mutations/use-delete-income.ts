'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { deleteIncome, DeleteIncomeParams } from '@/services/incomes'
import { queryFnWrapper } from '@/utils/error/query-fn-wrapper'

export const useDeleteIncome = () => {
  const query = useQueryClient()

  return useMutation({
    mutationKey: ['delete-income'],
    mutationFn: async (params: DeleteIncomeParams) => {
      toast.info('Deleting the income')

      return await queryFnWrapper(deleteIncome, params)
    },
    onSuccess: () => {
      query.resetQueries({
        queryKey: ['fetch-incomes'],
      })
      toast.success('Income was deleted successfully.')
    },
    onSettled: () => {
      query.invalidateQueries()
    },
  })
}
