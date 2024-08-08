'use server'

import { api } from '@/lib/axios'
import { Category } from '@/models/category'
import { ErrorServerAction } from '@/models/error'
import { Pagination, SearchParams } from '@/models/pagination'
import { getErrorMessage } from '@/utils/error/get-error-message'

export interface FetchCategoriesParams {
  searchParams?: Omit<SearchParams, 'value'> & {
    description?: string
  }
}

export type FetchCategoriesResponse = Pagination<Category>

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
