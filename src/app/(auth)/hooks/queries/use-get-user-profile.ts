'use client'

import { useQuery } from '@tanstack/react-query'

import { getUserProfile } from '@/services/user/get-user-profile'
import { queryFnWrapper } from '@/utils/error/query-fn-wrapper'

export const useGetUserProfile = () => {
  return useQuery({
    queryKey: ['get-user-profile'],
    queryFn: async () => queryFnWrapper(getUserProfile, {}),
  })
}
