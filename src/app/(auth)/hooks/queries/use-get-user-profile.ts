'use client'

import { useQuery } from '@tanstack/react-query'

import { getUserProfile } from '@/services/user'
import { queryFnWrapper } from '@/utils/error/query-fn-wrapper'

export const useGetUserProfile = () => {
  const query = useQuery({
    queryKey: ['get-user-profile'],
    queryFn: async () => queryFnWrapper(getUserProfile, {}),
  })

  return query
}
