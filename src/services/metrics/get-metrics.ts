'use server'

import { api } from '@/lib/axios'
import { ErrorServerAction } from '@/models/error'
import type { Metrics } from '@/models/metrics'
import { getErrorMessage } from '@/utils/error/get-error-message'

type GetMetricsResponse = Metrics

export async function getMetrics(): Promise<
  GetMetricsResponse | ErrorServerAction
> {
  try {
    const { data } = await api.get<GetMetricsResponse>('/metrics')

    return data
  } catch (error: unknown) {
    return getErrorMessage(error)
  }
}
