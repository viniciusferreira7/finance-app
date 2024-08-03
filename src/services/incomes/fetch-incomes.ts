'use server'

import { api } from '@/lib/axios'
import { ErrorServerAction } from '@/models/error'
import { Income } from '@/models/income'
import { Pagination, SearchParams } from '@/models/pagination'
import { convertToCents } from '@/utils/currency/convert-to-cents'
import { getErrorMessage } from '@/utils/error/get-error-message'

export interface FetchIncomesParams {
  searchParams?: SearchParams
}

export type FetchIncomesResponse = Pagination<Income>

export async function fetchIncomes(
  params?: FetchIncomesParams,
): Promise<FetchIncomesResponse | ErrorServerAction> {
  const convertedValue = convertToCents(Number(params?.searchParams?.value))

  try {
    const { data } = await api.get<FetchIncomesResponse>('/incomes', {
      params: {
        ...params?.searchParams,
        created_at_from: params?.searchParams?.createdAt?.from,
        created_at_to: params?.searchParams?.createdAt?.to,
        updated_at_from: params?.searchParams?.updatedAt?.from,
        updated_at_to: params?.searchParams?.updatedAt?.to,
        value: convertedValue,
      },
    })

    return data
  } catch (error: unknown) {
    return getErrorMessage(error)
  }
}
