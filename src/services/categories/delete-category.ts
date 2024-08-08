'use server'

import { api } from '@/lib/axios'
import { ErrorServerAction } from '@/models/error'
import { getErrorMessage } from '@/utils/error/get-error-message'

export interface DeleteCategoryParams {
  params: {
    id: string
  }
}

export interface DeleteCategoryResponse {}

export async function deleteCategory({
  params,
}: DeleteCategoryParams): Promise<DeleteCategoryResponse | ErrorServerAction> {
  try {
    const { data } = await api.delete<DeleteCategoryResponse>(
      `/categories/${params.id}`,
    )

    return data
  } catch (error: unknown) {
    return getErrorMessage(error)
  }
}
