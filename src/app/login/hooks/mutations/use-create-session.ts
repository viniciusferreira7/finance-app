'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { setCookie } from '@/app/utils/cookie/setCookie'
import { queryFnWrapper } from '@/app/utils/error/queryFnWrapper'
import {
  createSession,
  CreateSessionPayload,
} from '@/services/user/create-session'

export const useCreateSession = () => {
  const router = useRouter()
  const query = useQueryClient()

  return useMutation({
    mutationKey: ['create-session'],
    mutationFn: async (payload: CreateSessionPayload) =>
      queryFnWrapper(createSession, payload),
    onSuccess: async (data) => {
      await setCookie('finance-token', data.token)
      router.push('/')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    onSettled: () => {
      query.invalidateQueries()
    },
  })
}