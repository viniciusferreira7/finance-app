'use client'

import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface NavLinkProps extends LinkProps {
  className?: HTMLAnchorElement['className']
  children: ReactNode
}

export function NavLink({ className, children, ...props }: NavLinkProps) {
  const pathname = usePathname()

  return (
    <Link
      data-current={pathname.includes(props.href.toString())}
      className={cn(
        'flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground data-[current=true]:text-foreground',
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
