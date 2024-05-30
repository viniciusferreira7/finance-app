'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { createUser, CreateUserPayload } from '@/services/user'
import { queryFnWrapper } from '@/utils/error/query-fn-wrapper'

export const useCreateUser = () => {
  const query = useQueryClient()

  return useMutation({
    mutationKey: ['create-user'],
    mutationFn: async (payload: CreateUserPayload) =>
      queryFnWrapper(createUser, payload),
    onSuccess: async () => {
      toast.success('User was created successfully.')
    },
    onSettled: () => {
      query.invalidateQueries()
    },
  })
}
