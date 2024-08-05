import {
  Coins,
  Home,
  IndentDecrease,
  IndentIncrease,
  LayoutList,
} from 'lucide-react'

import { ModeToggle } from '@/components/mode-toggle'
import { Separator } from '@/components/ui/separator'

import { AccountMenu, Actions, NavLink } from './ui'

export function Header() {
  return (
    <div>
      <header className="flex h-16 items-center gap-4 border-b px-6">
        <Coins className="size-4" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center gap-x-4 lg:gap-x-6">
          <NavLink href="/">
            <Home className="size-4" />
            Home
          </NavLink>
          <NavLink href="/incomes">
            <IndentIncrease className="size-4" />
            Incomes
          </NavLink>
          <NavLink href="/expenses">
            <IndentDecrease className="size-4" />
            Expenses
          </NavLink>
          <NavLink href="/categories">
            <LayoutList className="size-4" />
            Categories
          </NavLink>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <ModeToggle />
          <AccountMenu />
        </div>
      </header>
      <Actions />
    </div>
  )
}
