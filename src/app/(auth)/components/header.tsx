import { IconCoins, IconHome, IconIndentIncrease } from '@tabler/icons-react'

import { ModeToggle } from '@/components/mode-toggle'
import { Separator } from '@/components/ui/separator'

import { NavLink } from './ui/nav-link'

export function Header() {
  return (
    <div className="border-b">
      <header className="flex h-16 items-center gap-4 px-6">
        <IconCoins className="size-4" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center gap-x-4 lg:gap-x-6">
          <NavLink href="/">
            <IconHome className="size-4" />
            Home
          </NavLink>
          <NavLink href="/incomes">
            <IconIndentIncrease className="size-4" />
            Incomes
          </NavLink>
        </nav>
        <div className="ml-auto flex items-center">
          <ModeToggle />
        </div>
      </header>
    </div>
  )
}
