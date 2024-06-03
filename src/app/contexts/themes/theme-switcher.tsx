'use client'

import { useTheme } from 'next-themes'
import { useEffect } from 'react'

import {
  ThemeConfig,
  useThemeConfig,
} from '@/app/(auth)/hooks/atoms/theme-config'
import { Theme, themes } from '@/utils/theme/themes'

type Variables = Theme['cssVars']['light'] | Theme['cssVars']['dark']

export function ThemeSwitcher() {
  const [themeConfig] = useThemeConfig()
  const { resolvedTheme: nextMode } = useTheme()

  const setCSSVariables = (variables: Variables): void => {
    Object.entries(variables).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value)
    })
  }

  const onSetNewCSSVariables = (
    config: ThemeConfig,
    mode: string | undefined,
  ): void => {
    const cssVariables = themes.find((theme) => theme.name === config.theme)

    if (cssVariables?.cssVars) {
      if (mode === 'light') {
        setCSSVariables(cssVariables.cssVars.light)
      }
      if (mode === 'dark') {
        setCSSVariables(cssVariables.cssVars.dark)
      }
    }
  }

  useEffect(() => {
    onSetNewCSSVariables(themeConfig, nextMode)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [themeConfig, nextMode])

  return null
}
