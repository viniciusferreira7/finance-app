'use server'

import { api } from '@/lib/axios'
import { Category } from '@/models/category'
import { ErrorServerAction } from '@/models/error'
import { Pagination } from '@/models/pagination'
import { getErrorMessage } from '@/utils/error/get-error-message'

export interface FetchCategoriesParams {
  searchParams?: {
    page?: number
    per_page?: number
    pagination_disabled?: boolean
  }
}

type FetchCategoriesResponse = Pagination<Category>

export async function fetchCategories(
  params?: FetchCategoriesParams,
): Promise<FetchCategoriesResponse | ErrorServerAction> {
  try {
    const { data } = await api.get<FetchCategoriesResponse>('/categories', {
      params: {
        ...params?.searchParams,
      },
    })

    return data
  } catch (error: unknown) {
    return getErrorMessage(error)
  }
}
