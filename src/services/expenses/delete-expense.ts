'use server'

import { api } from '@/lib/axios'
import { ErrorServerAction } from '@/models/error'
import { getErrorMessage } from '@/utils/error/get-error-message'

export interface DeleteExpenseParams {
  params: {
    id: string
  }
}

export interface DeleteExpenseResponse {}

export async function deleteExpense({
  params,
}: DeleteExpenseParams): Promise<DeleteExpenseResponse | ErrorServerAction> {
  try {
    const { data } = await api.delete<DeleteExpenseResponse>(
      `/expenses/${params.id}`,
    )

    return data
  } catch (error: unknown) {
    return getErrorMessage(error)
  }
}
