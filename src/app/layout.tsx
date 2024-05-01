import './globals.css'

import type { Metadata } from 'next'
import { Bebas_Neue, Inter } from 'next/font/google'

import { Toaster } from '@/components/ui/sonner'
import { cn } from '@/lib/utils'

import { QueryWrapper } from './contexts/QueryWrapper'

const inter = Inter({ subsets: ['latin'] })

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'Finance App',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'h-screen w-full bg-gray-800 text-white',
          inter.className,
          bebasNeue.variable,
        )}
      >
        <QueryWrapper>
          {children}
          <Toaster richColors />
        </QueryWrapper>
      </body>
    </html>
  )
}
