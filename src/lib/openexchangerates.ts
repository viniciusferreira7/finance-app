'use server'

import axios from 'axios'
import { z } from 'zod'

const envSchema = z.object({
  OPENEXCHAGERATES_API: z.string().url(),
  OPENEXCHAGERATES_ID: z.string(),
})

const env = envSchema.parse(process.env)

export const openxchageratesApi = axios.create({
  baseURL: env.OPENEXCHAGERATES_API,
  headers: {
    'Content-Type': 'application/json',
    isStaticToken: false,
  },
  params: {
    app_id: env.OPENEXCHAGERATES_ID,
  },
})
