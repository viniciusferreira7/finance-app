'use server'

import { api } from '@/lib/axios'
import { ErrorServerAction } from '@/models/error'
import { getErrorMessage } from '@/utils/error/get-error-message'

export interface UpdateIncomeParams {
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

export interface UpdateIncomeResponse {}

export async function updateIncome({
  payload,
  params,
}: UpdateIncomeParams): Promise<UpdateIncomeResponse | ErrorServerAction> {
  console.log(params)
  try {
    const { data } = await api.put<UpdateIncomeResponse>(
      `/incomes/${params.id}`,
      payload,
    )

    return data
  } catch (error: unknown) {
    return getErrorMessage(error)
  }
}
