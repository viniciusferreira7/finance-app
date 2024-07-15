/* eslint-disable prettier/prettier */
import * as React from 'react'

import { cn } from '@/lib/utils'

export interface RootProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType
  isError?: boolean
}

const Root = React.forwardRef<HTMLElement, RootProps>(
  ({ as: Root = 'div', isError, className, ...props }, ref) => {
    return (
      <Root
        ref={ref}
        className={cn(
          'group flex items-center rounded-md border border-input p-2 px-3 py-1 text-sm shadow-sm transition-colors duration-300 focus-within:outline-none focus-within:ring-1 focus-within:ring-ring',
          className,
          isError && 'border-destructive',
        )}
        {...props}
      />
    )
  },
)

Root.displayName = 'Root'

export interface ControlProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

const Control = React.forwardRef<HTMLInputElement, ControlProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'w-full bg-transparent outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Control.displayName = 'Control'

export interface HelperTextProps
  extends React.ParamHTMLAttributes<HTMLParagraphElement> {
  isError?: boolean
}

const HelperText = React.forwardRef<HTMLParagraphElement, HelperTextProps>(
  ({ className, isError, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          'mt-1 text-xs font-semibold text-white transition-transform',
          className,
          isError && 'text-destructive',
        )}
        {...props}
      />
    )
  },
)

HelperText.displayName = 'HelperText'

export { Root, Control, HelperText }
