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
import { Skeleton } from '@/components/ui/skeleton'
import { deleteCookie } from '@/utils/cookie/delete-cookie'

import { profileAtom, useProfile } from '../../hooks/atoms/profile'
import { useGetUserProfile } from '../../hooks/queries/use-get-user-profile'

export function AccountMenu() {
  const { data } = useGetUserProfile()
  useHydrateAtoms([[profileAtom, { profile: null }]])

  const [user, setUser] = useProfile()

  const router = useRouter()

  async function handleLogOut() {
    await deleteCookie('finance-token')
    router.push('/sign-in')
  }

  useEffect(() => {
    if (data) {
      setUser({ profile: data })
    }
  }, [data, setUser])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex select-none items-center gap-2"
        >
          {user.profile ? (
            <>
              <p className="hidden w-full max-w-20 truncate md:block md:max-w-40">
                {user.profile?.name}
              </p>
              <ChevronDown />
            </>
          ) : (
            <Skeleton className="h-4 w-40" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="text-sm font-normal text-muted-foreground">
          {user.profile ? (
            <div className="space-y-2">
              <p className="block w-full max-w-20 truncate text-foreground md:hidden md:max-w-40">
                {user.profile?.name}
              </p>
              <p>{user.profile?.email}</p>
            </div>
          ) : (
            <Skeleton className="h-4 w-full" />
          )}
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
