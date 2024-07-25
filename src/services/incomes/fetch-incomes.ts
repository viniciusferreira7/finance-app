'use server'

import { api } from '@/lib/axios'
import { ErrorServerAction } from '@/models/error'
import { Income } from '@/models/income'
import { Pagination } from '@/models/pagination'
import { getErrorMessage } from '@/utils/error/get-error-message'

export interface FetchIncomesParams {
  searchParams?: {
    page?: number
    per_page?: number
    pagination_disabled?: boolean
    name?: string | null
    value?: string | null
    createdAt?: {
      from: string | null
      to: string | null
    }
    updatedAt?: {
      from: string | null
      to: string | null
    }
    category?: string | null
    sort?: string | null
  }
}

export type FetchIncomesResponse = Pagination<Income>

export async function fetchIncomes(
  params?: FetchIncomesParams,
): Promise<FetchIncomesResponse | ErrorServerAction> {
  try {
    const { data } = await api.get<FetchIncomesResponse>('/incomes', {
      params: {
        ...params?.searchParams,
      },
    })

    return data
  } catch (error: unknown) {
    return getErrorMessage(error)
  }
}
