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
  try {
    const { data } = await api.delete<DeleteIncomeResponse>(
      `/incomes/${params.id}`,
    )

    return data
  } catch (error: unknown) {
    console.log(error)
    return getErrorMessage(error)
  }
}
