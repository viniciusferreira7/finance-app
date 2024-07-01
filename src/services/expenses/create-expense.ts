'use server'

import { api } from '@/lib/axios'
import { ErrorServerAction } from '@/models/error'
import { getErrorMessage } from '@/utils/error/get-error-message'

export interface CreateExpensePayload {
  name: string
  value: number
  description?: string
  category_id: string
}

export interface CreateExpenseResponse {}

export async function createExpense(
  payload: CreateExpensePayload,
): Promise<CreateExpenseResponse | ErrorServerAction> {
  try {
    const { data } = await api.post<CreateExpenseResponse>('/expenses', payload)

    return data
  } catch (error: unknown) {
    return getErrorMessage(error)
  }
}
