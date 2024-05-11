'use server'

import { cookies } from 'next/headers'

export async function setCookie(key: string, value: string) {
  const TWENTY_DAYS = 60 * 60 * 24 * 2

  cookies().set(key, value, { maxAge: TWENTY_DAYS })
}
