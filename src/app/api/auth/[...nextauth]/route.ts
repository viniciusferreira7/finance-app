import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
import { z } from 'zod'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const envSchema = z.object({
    GOOGLE_CLIENT_ID: z.string(),
    GOOGLE_CLIENT_SECRET: z.string(),
  })

  const env = envSchema.parse(process.env)

  return await NextAuth(req, res, {
    providers: [
      GoogleProvider({
        clientId: env.GOOGLE_CLIENT_ID,
        clientSecret: env.GOOGLE_CLIENT_SECRET,
        authorization: {
          params: {
            scope:
              'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email',
          },
        },
      }),
    ],
  })
}

export { handler as GET, handler as POST }
