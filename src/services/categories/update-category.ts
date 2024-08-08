'use server'

import { api } from '@/lib/axios'
import { ErrorServerAction } from '@/models/error'
import { getErrorMessage } from '@/utils/error/get-error-message'

export interface UpdateCategoryParams {
  params: {
    id: string
  }
  payload: {
    name?: string
    description?: string | null
  }
}

export interface UpdateCategoryResponse {}

export async function updateCategory({
  payload,
  params,
}: UpdateCategoryParams): Promise<UpdateCategoryResponse | ErrorServerAction> {
  try {
    const { data } = await api.put<UpdateCategoryResponse>(
      `/categories/${params.id}`,
      payload,
    )

    return data
  } catch (error: unknown) {
    return getErrorMessage(error)
  }
}
