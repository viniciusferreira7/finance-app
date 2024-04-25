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
          'flex items-center rounded-md border border-gray-600 p-2 duration-300 focus-within:border-gray-300',
          className,
          isError && 'border-red-600',
        )}
        {...props}
      />
    )
  },
)

Root.displayName = 'Root'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Control = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'w-full bg-transparent outline-none placeholder:text-gray-500',
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
          isError && 'text-red-500',
        )}
        {...props}
      />
    )
  },
)

HelperText.displayName = 'HelperText'

export { Root, Control, HelperText }
