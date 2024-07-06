'use client'

import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import { getUserProfile } from '@/services/user'
import { queryFnWrapper } from '@/utils/error/query-fn-wrapper'

export const useGetUserProfile = () => {
  const router = useRouter()

  const query = useQuery({
    queryKey: ['get-user-profile'],
    queryFn: async () => queryFnWrapper(getUserProfile, {}),
  })

  if (query.isError) {
    router.push('/sign-in')
  }

  return query
}
