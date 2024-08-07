'use server'

import { api } from '@/lib/axios'
import { ErrorServerAction } from '@/models/error'
import { Income } from '@/models/income'
import { Pagination, SearchParams } from '@/models/pagination'
import { convertToCents } from '@/utils/currency/convert-to-cents'
import { getErrorMessage } from '@/utils/error/get-error-message'

export interface FetchIncomeHistoriesParams {
  incomeId: string
  searchParams?: Omit<SearchParams, 'updatedAt'>
}

export type FetchIncomeHistoriesResponse = Pagination<
  Omit<Income, 'updated_at'>
>

export async function fetchIncomeHistories({
  incomeId,
  ...params
}: FetchIncomeHistoriesParams): Promise<
  FetchIncomeHistoriesResponse | ErrorServerAction
> {
  const convertedValue = convertToCents(Number(params?.searchParams?.value))

  try {
    const { data } = await api.get<FetchIncomeHistoriesResponse>(
      `/income-histories/${incomeId}`,
      {
        params: {
          ...params?.searchParams,
          created_at_from: params?.searchParams?.createdAt?.from,
          created_at_to: params?.searchParams?.createdAt?.to,
          value: convertedValue,
        },
      },
    )

    return data
  } catch (error: unknown) {
    return getErrorMessage(error)
  }
}
