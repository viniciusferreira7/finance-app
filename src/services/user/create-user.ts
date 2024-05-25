'use server'

import { api } from '@/lib/axios'
import { ErrorServerAction } from '@/models/error'
import { getErrorMessage } from '@/utils/error/get-error-message'

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
