'use server'

import { getErrorMessage } from '@/app/utils/error/getErrorMessage'
import { api } from '@/lib/axios'
import { ErrorServerAction } from '@/models/error'

export interface CreateUserPayload {
  name: string
  email: string
  password: string
}

export async function createUser(
  payload: CreateUserPayload,
): Promise<void | ErrorServerAction> {
  try {
    const { data } = await api.post('/users', payload)

    return data
  } catch (error: unknown) {
    return getErrorMessage(error)
  }
}
