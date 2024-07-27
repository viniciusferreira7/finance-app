'use server'

import { api } from '@/lib/axios'
import { ErrorServerAction } from '@/models/error'
import { getErrorMessage } from '@/utils/error/get-error-message'

export interface UpdateExpenseParams {
  params: {
    id: string
  }
  payload: {
    name?: string
    value?: number
    description?: string
    category_id?: string
  }
}

export interface UpdateExpenseResponse {}

export async function updateExpense({
  payload,
  params,
}: UpdateExpenseParams): Promise<UpdateExpenseResponse | ErrorServerAction> {
  try {
    const { data } = await api.put<UpdateExpenseResponse>(
      `/expenses/${params.id}`,
      payload,
    )

    return data
  } catch (error: unknown) {
    return getErrorMessage(error)
  }
}
