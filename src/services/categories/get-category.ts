'use server'

import { api } from '@/lib/axios'
import { Category } from '@/models/category'
import { ErrorServerAction } from '@/models/error'
import { getErrorMessage } from '@/utils/error/get-error-message'

export interface GetCategoryParams {
  params: {
    id: string
  }
}

export interface GetCategoryResponse extends Category {}

export async function getCategory({
  params,
}: GetCategoryParams): Promise<GetCategoryResponse | ErrorServerAction> {
  try {
    const { data } = await api.get<GetCategoryResponse>(
      `/categories/${params.id}`,
    )

    return data
  } catch (error: unknown) {
    return getErrorMessage(error)
  }
}
