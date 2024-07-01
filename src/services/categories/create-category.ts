'use server'

import { api } from '@/lib/axios'
import { ErrorServerAction } from '@/models/error'
import { getErrorMessage } from '@/utils/error/get-error-message'

export interface CreateCategoryPayload {
  name: string
  description?: string
}

export interface CreateCategoryResponse {}

export async function createCategory(
  payload: CreateCategoryPayload,
): Promise<CreateCategoryResponse | ErrorServerAction> {
  try {
    const { data } = await api.post<CreateCategoryResponse>(
      '/categories',
      payload,
    )

    return data
  } catch (error: unknown) {
    return getErrorMessage(error)
  }
}
