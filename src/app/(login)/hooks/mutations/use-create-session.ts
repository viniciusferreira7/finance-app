'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import {
  createSession,
  CreateSessionPayload,
} from '@/services/user/create-session'
import { setCookie } from '@/utils/cookie/setCookie'
import { queryFnWrapper } from '@/utils/error/query-fn-wrapper'

export const useCreateSession = () => {
  const router = useRouter()
  const query = useQueryClient()

  return useMutation({
    mutationKey: ['create-session'],
    mutationFn: async (payload: CreateSessionPayload) => {
      toast.info('Creating a session for you.')

      return await queryFnWrapper(createSession, payload)
    },
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
