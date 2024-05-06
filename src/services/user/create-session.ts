'use server'

import { getErrorMessage } from '@/app/utils/error/getErrorMessage'
import { api } from '@/lib/axios'

export interface CreateSessionPayload {
  name: string
  email: string
  password: string
}

export interface CreateSessionResponse {
  token: string
}

export async function createSession(payload: CreateSessionPayload) {
  try {
    const { data } = await api.post<CreateSessionResponse>('/session', payload)

    return data
  } catch (error: unknown) {
    console.log(error?.response?.data)
    // TODO: create a error message
    return getErrorMessage(error)
  }
}
