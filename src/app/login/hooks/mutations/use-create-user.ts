'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { setCookie } from '@/app/utils/cookie/setCookie'
import { createUser, CreateUserPayload } from '@/services/user'

export const useCreateUser = () => {
  const router = useRouter()
  const query = useQueryClient()

  return useMutation({
    mutationKey: ['create-user'],
    mutationFn: async (payload: CreateUserPayload) => createUser(payload),
    onSuccess: async () => {
      toast.success('User was created successfully.')
      await setCookie(
        'finance-token',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
      )
      router.push('/')
    },
    onSettled: () => {
      query.invalidateQueries()
    },
  })
}
