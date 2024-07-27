'use server'

import { api } from '@/lib/axios'
import { ErrorServerAction } from '@/models/error'
import { Income } from '@/models/income'
import { getErrorMessage } from '@/utils/error/get-error-message'

export interface GetIncomeParams {
  params: {
    id: string
  }
}

export interface GetIncomeResponse extends Income {}

export async function getIncome({
  params,
}: GetIncomeParams): Promise<GetIncomeResponse | ErrorServerAction> {
  try {
    const { data } = await api.get<GetIncomeResponse>(`/incomes/${params.id}`)

    return data
  } catch (error: unknown) {
    return getErrorMessage(error)
  }
}
