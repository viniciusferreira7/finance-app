'use server'

import { api } from '@/lib/axios'
import { ErrorServerAction } from '@/models/error'
import { getErrorMessage } from '@/utils/error/get-error-message'

export interface GetMetricsMonthlyIncomesResponse {
  amount: number
  diff_from_last_month: number
}

export async function getMetricsMonthlyIncomes(): Promise<
  GetMetricsMonthlyIncomesResponse | ErrorServerAction
> {
  try {
    const { data } = await api.get<GetMetricsMonthlyIncomesResponse>(
      `/incomes/metrics-monthlyIncomes`,
    )

    return data
  } catch (error: unknown) {
    return getErrorMessage(error)
  }
}
