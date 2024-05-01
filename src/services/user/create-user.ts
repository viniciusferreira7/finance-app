'use server'

import { getErrorMessage } from '@/app/utils/error/getErrorMessage'
import { api } from '@/lib/axios'

export interface CreateUserPayload {
  name: string
  email: string
  password: string
}

export async function createUser(payload: CreateUserPayload) {
  try {
    const { data } = await api.post('/users', payload)

    return data
  } catch (error: unknown) {
    console.log(error?.response?.data)
    // TODO: create a error message
    return getErrorMessage(error)
  }
}
