'use client'

import { useHydrateAtoms } from 'jotai/utils'
import { ChevronDown, LogOut, Settings } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { deleteCookie } from '@/utils/cookie/delete-cookie'

import { profileAtom, useProfile } from '../../hooks/atoms/profile'
import { useGetUserProfile } from '../../hooks/queries/use-get-user-profile'

export function AccountMenu() {
  const { data } = useGetUserProfile()
  useHydrateAtoms([[profileAtom, { profile: null }]])

  const [{ profile }, setter] = useProfile()

  const router = useRouter()

  async function handleLogOut() {
    await deleteCookie('finance-token')
    router.push('/sign-in')
  }

  useEffect(() => {
    if (data) {
      setter({ profile: data })
    }
  }, [data, setter])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex select-none items-center gap-2"
        >
          {profile?.name} <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="text-sm font-normal text-muted-foreground">
          {profile?.email}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/settings" className="cursor-pointer">
            <Settings className="mr-2 size-4" />
            <span>Settings</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer text-rose-500 duration-500 hover:bg-rose-500/10 dark:text-rose-400 dark:hover:bg-rose-400/10"
          onClick={handleLogOut}
        >
          <LogOut className="mr-2 size-4" />
          <span>Exit</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
