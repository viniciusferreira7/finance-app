'use server'

import { isAxiosError } from 'axios'

export async function getErrorMessage(error: unknown) {
  let message: string
  let statusCode: number | undefined

  if (isAxiosError(error)) {
    const apiStringError =
      error?.response?.data?.message ||
      error?.response?.data?.detail ||
      error?.response?.data?.error ||
      error?.response?.data?.data

    message = apiStringError

    if (Array.isArray(message) && message.length > 0) {
      message = message[0]
    }

    statusCode = error.response?.status
  } else if (error && typeof error === 'object' && 'message' in error) {
    message = String(error.message)
  } else if (typeof error === 'string') {
    message = error
  } else {
    message = 'Algo inesperado ocorreu.'
  }

  return { message, statusCode }
}
