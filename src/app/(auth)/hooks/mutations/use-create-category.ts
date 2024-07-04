'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { createCategory, CreateCategoryPayload } from '@/services/categories'
import { queryFnWrapper } from '@/utils/error/query-fn-wrapper'

export const useCreateCategory = () => {
  const query = useQueryClient()

  return useMutation({
    mutationKey: ['create-category'],
    mutationFn: async (payload: CreateCategoryPayload) => {
      toast.info('Creating a category')

      return await queryFnWrapper(createCategory, payload)
    },
    onSuccess: () => {
      toast.success('Category was created successfully.')
    },
    onSettled: () => {
      query.invalidateQueries()
    },
  })
}
