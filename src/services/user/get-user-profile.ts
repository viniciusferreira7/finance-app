'use server'

import { getErrorMessage } from '@/app/utils/error/get-error-message'
import { api } from '@/lib/axios'
import { ErrorServerAction } from '@/models/error'
import { UserProfile } from '@/models/user-profile'

type GetUserProfileResponse = UserProfile

export async function getUserProfile(): Promise<
  GetUserProfileResponse | ErrorServerAction
> {
  try {
    const { data } = await api.get<GetUserProfileResponse>('/me')

    return data
  } catch (error: unknown) {
    return getErrorMessage(error)
  }
}
