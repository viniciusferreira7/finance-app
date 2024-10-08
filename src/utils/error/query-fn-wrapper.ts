'use client'

import { ErrorServerAction } from '@/models/error'

export async function queryFnWrapper<T, K>(
  fn: (args: K) => Promise<T | ErrorServerAction>,
  args: K,
): Promise<T> {
  const data = await fn(args)

  if (data && typeof data === 'object' && 'message' in data) {
    const { message } = data

    throw new Error(message)
  }

  return data as T
}
