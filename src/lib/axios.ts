'use server'

import axios from 'axios'
import { cookies } from 'next/headers'
import { z } from 'zod'

const envSchema = z.object({
  FINANCE_API_URL: z.string(),
  FINANCE_APP_TOKEN: z.string(),
})

const env = envSchema.parse(process.env)

export const api = axios.create({
  baseURL: env.FINANCE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    isStaticToken: false,
  },
})

api.interceptors.request.use((config) => {
  if (config.headers.isStaticToken) {
    config.headers.Authorization = `Bearer ${env.FINANCE_APP_TOKEN}`
  } else {
    const token = cookies().get('finance-token')
    config.headers.Authorization = `Bearer ${token?.value}`
  }

  return config
})
