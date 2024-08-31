'use server'

import { api } from '@/lib/axios'
import { ErrorServerAction } from '@/models/error'
import { getErrorMessage } from '@/utils/error/get-error-message'

export interface GetMetricsMonthlyExpensesResponse {
  amount: number
  diff_from_last_month: number
}

export async function getMetricsMonthlyExpenses(): Promise<
  GetMetricsMonthlyExpensesResponse | ErrorServerAction
> {
  try {
    const { data } = await api.get<GetMetricsMonthlyExpensesResponse>(
      `/expenses/metrics-monthly`,
    )

    return data
  } catch (error: unknown) {
    return getErrorMessage(error)
  }
}
