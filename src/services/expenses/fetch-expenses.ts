'use server'

import { api } from '@/lib/axios'
import { ErrorServerAction } from '@/models/error'
import { Expense } from '@/models/expenses'
import { Pagination } from '@/models/pagination'
import { convertToCents } from '@/utils/currency/convert-to-cents'
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
  const convertedValue = convertToCents(Number(params?.searchParams?.value))

  try {
    const { data } = await api.get<FetchExpensesResponse>('/expenses', {
      params: {
        ...params?.searchParams,
        created_at_from: params?.searchParams?.createdAt?.from,
        created_at_to: params?.searchParams?.createdAt?.to,
        updated_at_from: params?.searchParams?.updatedAt?.from,
        updated_at_to: params?.searchParams?.updatedAt?.to,
        value: convertedValue,
      },
    })

    return data
  } catch (error: unknown) {
    return getErrorMessage(error)
  }
}
