'use server'

import { getErrorMessage } from '@/app/utils/error/get-error-message'
import { api } from '@/lib/axios'
import { ErrorServerAction } from '@/models/error'

export interface CreateSessionPayload {
  email: string
  password: string
}

export interface CreateSessionResponse {
  token: string
}

export async function createSession(
  payload: CreateSessionPayload,
): Promise<CreateSessionResponse | ErrorServerAction> {
  try {
    const { data } = await api.post<CreateSessionResponse>('/sessions', payload)

    return data
  } catch (error: unknown) {
    return getErrorMessage(error)
  }
}
