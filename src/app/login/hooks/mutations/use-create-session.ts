'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { setCookie } from '@/app/utils/cookie/setCookie'
import { CreateUserPayload } from '@/services/user'
import { createSession } from '@/services/user/create-session'

export const useCreateSession = () => {
  const router = useRouter()
  const query = useQueryClient()

  return useMutation({
    mutationKey: ['create-session'],
    mutationFn: async (payload: CreateUserPayload) => createSession(payload),
    onSuccess: async (data) => {
      await setCookie('finance-token', data.token)
      router.push('/')
    },
    onSettled: () => {
      query.invalidateQueries()
    },
  })
}
