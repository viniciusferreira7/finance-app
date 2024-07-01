'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import {
  createCategory,
  CreateCategoryPayload,
} from '@/services/categories/create-category'
import { queryFnWrapper } from '@/utils/error/query-fn-wrapper'

export const useCreateCategory = () => {
  const query = useQueryClient()

  return useMutation({
    mutationKey: ['create-Category'],
    mutationFn: (payload: CreateCategoryPayload) =>
      queryFnWrapper(createCategory, payload),
    onSuccess: async () => {
      toast.success('Category was created successfully.')
    },
    onSettled: () => {
      query.invalidateQueries()
    },
  })
}
