'use server'

import { api } from '@/lib/axios'
import { ErrorServerAction } from '@/models/error'
import { getErrorMessage } from '@/utils/error/get-error-message'

export interface GetBalanceResponse {
  incomes_total: number
  expenses_total: number
  balance_total: number
}

export async function getBalance(): Promise<
  GetBalanceResponse | ErrorServerAction
> {
  try {
    const { data } = await api.get<GetBalanceResponse>('/balance')

    return data
  } catch (error: unknown) {
    return getErrorMessage(error)
  }
}
