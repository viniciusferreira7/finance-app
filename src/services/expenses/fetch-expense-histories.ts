'use server'

import { api } from '@/lib/axios'
import { ErrorServerAction } from '@/models/error'
import { Expense } from '@/models/expenses'
import { Pagination, SearchParams } from '@/models/pagination'
import { convertToCents } from '@/utils/currency/convert-to-cents'
import { getErrorMessage } from '@/utils/error/get-error-message'

export interface FetchExpenseHistoriesParams {
  expenseId: string
  searchParams?: Omit<SearchParams, 'updatedAt'>
}

export type FetchExpenseHistoriesResponse = Pagination<
  Omit<Expense, 'updated_at'>
>

export async function fetchExpenseHistories({
  expenseId,
  ...params
}: FetchExpenseHistoriesParams): Promise<
  FetchExpenseHistoriesResponse | ErrorServerAction
> {
  const convertedValue = convertToCents(Number(params?.searchParams?.value))

  try {
    const { data } = await api.get<FetchExpenseHistoriesResponse>(
      `/expense-histories/${expenseId}`,
      {
        params: {
          ...params?.searchParams,
          created_at_from: params?.searchParams?.createdAt?.from,
          created_at_to: params?.searchParams?.createdAt?.to,
          value: convertedValue,
        },
      },
    )

    return data
  } catch (error: unknown) {
    return getErrorMessage(error)
  }
}
