import './globals.css'

import { Provider as JotaiProvider } from 'jotai'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

import { Toaster } from '@/components/ui/sonner'
import { cn } from '@/lib/utils'

import { QueryWrapper } from './contexts'
import { ThemeSwitcher, ThemeWrapper } from './contexts/themes'

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
    <html
      lang="en"
      className="scrollbar scrollbar-track-secondary scrollbar-thumb-background"
    >
      <body
        className={cn(
          'h-screen w-full bg-background text-foreground',
          inter.className,
        )}
        suppressHydrationWarning={true}
      >
        <JotaiProvider>
          <QueryWrapper>
            <ThemeWrapper>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
                storageKey="finance-theme"
              >
                {children}
                <ThemeSwitcher />
                <Toaster richColors closeButton />
              </ThemeProvider>
            </ThemeWrapper>
          </QueryWrapper>
        </JotaiProvider>
      </body>
    </html>
  )
}
