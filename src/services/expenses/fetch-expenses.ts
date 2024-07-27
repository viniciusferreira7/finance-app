'use server'

import { api } from '@/lib/axios'
import { ErrorServerAction } from '@/models/error'
import { Expense } from '@/models/expenses'
import { Pagination } from '@/models/pagination'
import { getErrorMessage } from '@/utils/error/get-error-message'

export interface FetchExpensesParams {
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

export type FetchExpensesResponse = Pagination<Expense>

export async function fetchExpenses(
  params?: FetchExpensesParams,
): Promise<FetchExpensesResponse | ErrorServerAction> {
  try {
    const { data } = await api.get<FetchExpensesResponse>('/expenses', {
      params: {
        ...params?.searchParams,
      },
    })

    return data
  } catch (error: unknown) {
    return getErrorMessage(error)
  }
}
