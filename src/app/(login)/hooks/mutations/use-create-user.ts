'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { createUser, CreateUserPayload } from '@/services/user'

export const useCreateUser = () => {
  const query = useQueryClient()

  return useMutation({
    mutationKey: ['create-user'],
    mutationFn: async (payload: CreateUserPayload) => createUser(payload),
    onSuccess: async () => {
      toast.success('User was created successfully.')
    },
    onSettled: () => {
      query.invalidateQueries()
    },
  })
}
