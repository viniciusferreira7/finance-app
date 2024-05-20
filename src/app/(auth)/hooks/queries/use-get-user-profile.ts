'use client'

import { useQuery } from '@tanstack/react-query'

import { queryFnWrapper } from '@/app/utils/error/query-fn-wrapper'
import { getUserProfile } from '@/services/user/get-user-profile'

export const useGetUserProfile = () => {
  return useQuery({
    queryKey: ['get-user-profile'],
    queryFn: async () => queryFnWrapper(getUserProfile, {}),
  })
}
