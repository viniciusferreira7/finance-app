'use client'

import { CheckIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { IconRefreshDot } from '@tabler/icons-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { useThemeConfig } from '@/app/(auth)/hooks/atoms/theme-config'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import { themes } from '@/utils/theme/themes'

export function Customizer() {
  const [mounted, setMounted] = useState(false)
  const [themeConfig, setThemeConfig] = useThemeConfig()
  const { setTheme: setMode, resolvedTheme: mode } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <div className="flex items-start pt-4 md:pt-0">
        <div className="space-y-1 pr-2">
          <div className="font-semibold leading-none tracking-tight">
            Customize
          </div>
          <div className="text-xs text-muted-foreground">
            Pick a style and color for your components.
          </div>
        </div>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="ml-auto rounded-[0.5rem]"
          onClick={() => {
            setThemeConfig({
              ...themeConfig,
              theme: 'blue',
              radius: 0.5,
            })
          }}
        >
          <IconRefreshDot />
          <span className="sr-only">Reset</span>
        </Button>
      </div>
      <div className="flex flex-1 flex-col space-y-4 md:space-y-6">
        <div className="space-y-1.5">
          <Label className="text-xs">Color</Label>
          <div className="grid grid-cols-3 gap-2">
            {themes.map((theme) => {
              const isActive = themeConfig.theme === theme.name
              const cssVariable = `hsl(${theme?.activeColor[mode === 'dark' ? 'dark' : 'light']})`

              return mounted ? (
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  key={theme.name}
                  onClick={() => {
                    setThemeConfig({
                      ...themeConfig,
                      theme: theme.name,
                    })
                  }}
                  className={cn(
                    'justify-start',
                    isActive && 'border-2 border-primary',
                  )}
                  style={
                    {
                      '--theme-primary': cssVariable,
                    } as React.CSSProperties
                  }
                >
                  <span
                    className={cn(
                      'mr-1 flex h-5 w-5 shrink-0 -translate-x-1 items-center justify-center rounded-full bg-[--theme-primary]',
                    )}
                  >
                    {isActive && <CheckIcon className="h-4 w-4 text-white" />}
                  </span>
                  {theme.label}
                </Button>
              ) : (
                <Skeleton className="h-8 w-full" key={theme.name} />
              )
            })}
          </div>
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs">Radius</Label>
          <div className="grid grid-cols-5 gap-2">
            {['0', '0.3', '0.5', '0.75', '1.0'].map((value) => {
              const isSameRadius = themeConfig.radius === parseFloat(value)

              return (
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  key={value}
                  onClick={() => {
                    setThemeConfig({
                      ...themeConfig,
                      radius: parseFloat(value),
                    })
                  }}
                  className={cn(isSameRadius && 'border-2 border-primary')}
                >
                  {value}
                </Button>
              )
            })}
          </div>
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs">Mode</Label>
          <div className="grid grid-cols-3 gap-2">
            {mounted ? (
              <>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setMode('light')}
                  className={cn(mode === 'light' && 'border-2 border-primary')}
                >
                  <SunIcon className="mr-1 -translate-x-1" />
                  Light
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setMode('dark')}
                  className={cn(mode === 'dark' && 'border-2 border-primary')}
                >
                  <MoonIcon className="mr-1 -translate-x-1" />
                  Dark
                </Button>
              </>
            ) : (
              <>
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-8 w-full" />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
