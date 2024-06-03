'use client'

import { useThemeConfig } from '@/app/(auth)/hooks/atoms/theme-config'
import { cn } from '@/lib/utils'

interface ThemeWrapperProps extends React.ComponentProps<'div'> {
  defaultTheme?: string
}

export function ThemeWrapper({
  defaultTheme,
  children,
  className,
}: ThemeWrapperProps) {
  const [themeConfig] = useThemeConfig()

  return (
    <div
      className={cn(
        `theme-${defaultTheme || themeConfig.theme}`,
        'w-full',
        className,
      )}
      style={
        {
          '--radius': `${defaultTheme ? 0.5 : themeConfig.radius}rem`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  )
}
