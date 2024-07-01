'use server'

import { api } from '@/lib/axios'
import { ErrorServerAction } from '@/models/error'
import { getErrorMessage } from '@/utils/error/get-error-message'

export interface CreateIncomePayload {
  name: string
  value: number
  description?: number
  category_id: string
}

export interface CreateIncomeResponse {
  token: string
}

export async function createIncome(
  payload: CreateIncomePayload,
): Promise<CreateIncomeResponse | ErrorServerAction> {
  try {
    const { data } = await api.post<CreateIncomeResponse>('/incomes', payload)

    return data
  } catch (error: unknown) {
    return getErrorMessage(error)
  }
}
