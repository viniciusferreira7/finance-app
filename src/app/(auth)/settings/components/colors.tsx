'use client'

import { CheckIcon } from '@radix-ui/react-icons'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@radix-ui/react-popover'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@radix-ui/react-tooltip'
import { Paintbrush } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { Skeleton } from '@/components/ui/skeleton'
import { TooltipProvider } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { themes } from '@/utils/theme/themes'

import { useThemeConfig } from '../../hooks/atoms/theme-config'
import { Customizer } from './ui'

export function Colors() {
  const [themeConfig, setThemeConfig] = useThemeConfig()
  const { resolvedTheme: mode } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex items-center space-x-2">
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline" className="md:hidden">
            <Paintbrush className="mr-2 h-4 w-4" />
            Customize
          </Button>
        </DrawerTrigger>
        <DrawerContent className="p-6 pt-0">
          <Customizer />
        </DrawerContent>
      </Drawer>
      <div className="hidden md:flex">
        <div className="mr-2 hidden items-center space-x-0.5 lg:flex">
          {mounted ? (
            <TooltipProvider>
              {['zinc', 'rose', 'blue', 'green', 'orange'].map((color) => {
                const theme = themes.find((theme) => theme.name === color)
                const isActive = themeConfig.theme === color
                const cssVariable = `hsl(${theme?.activeColor[mode === 'dark' ? 'dark' : 'light']})`

                if (!theme) {
                  return null
                }

                return (
                  <Tooltip key={theme.name}>
                    <TooltipTrigger asChild>
                      <button
                        type="button"
                        onClick={() =>
                          setThemeConfig({
                            ...themeConfig,
                            theme: theme.name,
                          })
                        }
                        className={cn(
                          'flex h-9 w-9 items-center justify-center rounded-full border-2 text-xs',
                          isActive
                            ? 'border-[--theme-primary]'
                            : 'border-transparent',
                        )}
                        style={
                          {
                            '--theme-primary': cssVariable,
                          } as React.CSSProperties
                        }
                      >
                        <span
                          className={cn(
                            'flex h-6 w-6 items-center justify-center rounded-full bg-[--theme-primary]',
                          )}
                        >
                          {isActive && (
                            <CheckIcon className="h-4 w-4 text-white" />
                          )}
                        </span>
                        <span className="sr-only">{theme.label}</span>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent
                      align="center"
                      className="rounded-[0.5rem] bg-zinc-900 text-zinc-50"
                    >
                      {theme.label}
                    </TooltipContent>
                  </Tooltip>
                )
              })}
            </TooltipProvider>
          ) : (
            <div className="mr-1 flex items-center gap-4">
              <Skeleton className="h-6 w-6 rounded-full" />
              <Skeleton className="h-6 w-6 rounded-full" />
              <Skeleton className="h-6 w-6 rounded-full" />
              <Skeleton className="h-6 w-6 rounded-full" />
              <Skeleton className="h-6 w-6 rounded-full" />
            </div>
          )}
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">
              <Paintbrush className="mr-2 h-4 w-4" />
              Customize
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="center"
            className="z-40 w-[340px] rounded-[0.5rem] bg-white p-6 dark:bg-zinc-950"
          >
            <Customizer />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}
