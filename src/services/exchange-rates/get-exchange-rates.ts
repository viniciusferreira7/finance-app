'use server'

import { openxchageratesApi } from '@/lib/openexchangerates'
import { ErrorServerAction } from '@/models/error'
import { ExchangeRates } from '@/models/exchange-rates'
import { getErrorMessage } from '@/utils/error/get-error-message'

export interface GetExchangeRatesResponse extends ExchangeRates {}

export async function getExchangeRates(): Promise<
  GetExchangeRatesResponse | ErrorServerAction
> {
  try {
    const { data } =
      await openxchageratesApi.get<GetExchangeRatesResponse>('/latest.json')

    return data
  } catch (error: unknown) {
    return getErrorMessage(error)
  }
}
