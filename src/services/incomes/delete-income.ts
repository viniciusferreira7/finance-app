'use server'

import { api } from '@/lib/axios'
import { ErrorServerAction } from '@/models/error'
import { getErrorMessage } from '@/utils/error/get-error-message'

export interface DeleteIncomeParams {
  params: {
    id: string
  }
}

export interface DeleteIncomeResponse {}

export async function deleteIncome({
  params,
}: DeleteIncomeParams): Promise<DeleteIncomeResponse | ErrorServerAction> {
  console.log(params)
  try {
    const { data } = await api.put<DeleteIncomeResponse>(
      `/incomes/${params.id}`,
    )

    return data
  } catch (error: unknown) {
    return getErrorMessage(error)
  }
}
