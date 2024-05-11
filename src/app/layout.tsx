import './globals.css'

import type { Metadata } from 'next'
import { Bebas_Neue, Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

import { Toaster } from '@/components/ui/sonner'
import { cn } from '@/lib/utils'

import { QueryWrapper } from './contexts/query-wrapper'

const inter = Inter({ subsets: ['latin'] })

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  weight: ['400'],
})

export const metadata: Metadata = {
  title: {
    default: 'finance.app',
    template: '%s | finance.app',
  },
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
          'h-screen w-full bg-background text-foreground',
          inter.className,
          bebasNeue.variable,
        )}
      >
        <QueryWrapper>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="finance-theme"
          >
            {children}
            <Toaster richColors />
          </ThemeProvider>
        </QueryWrapper>
      </body>
    </html>
  )
}
