'use server'

import { api } from '@/lib/axios'
import { ErrorServerAction } from '@/models/error'
import { Expense } from '@/models/expenses'
import { getErrorMessage } from '@/utils/error/get-error-message'

export interface GetExpenseParams {
  params: {
    id: string
  }
}

export interface GetExpenseResponse extends Expense {}

export async function getExpense({
  params,
}: GetExpenseParams): Promise<GetExpenseResponse | ErrorServerAction> {
  try {
    const { data } = await api.get<GetExpenseResponse>(`/expenses/${params.id}`)

    return data
  } catch (error: unknown) {
    return getErrorMessage(error)
  }
}
