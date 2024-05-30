import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

import { Toaster } from '@/components/ui/sonner'
import { cn } from '@/lib/utils'

import { QueryWrapper } from './contexts'

const inter = Inter({ subsets: ['latin'] })

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
        )}
        suppressHydrationWarning={true}
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
