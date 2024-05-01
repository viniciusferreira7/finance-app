import { useAutoAnimate } from '@formkit/auto-animate/react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

import { useLogin } from '../../contexts'

export function Toggle() {
  const [parent] = useAutoAnimate()
  const { activeForm, onSetActiveForm } = useLogin()

  const isSignIn = activeForm === 'sign-in'
  const isSignUp = activeForm === 'sign-up'

  return (
    <div
      className={cn(
        'absolute right-1/2 top-0 z-20 h-full w-6/12 overflow-hidden rounded-r-[9.375rem] bg-[#512da8] text-white duration-700',
        isSignIn && 'translate-x-full rounded-l-[9.375rem] rounded-r-none',
      )}
    >
      <div ref={parent} className="grid h-full w-full place-items-center ">
        {isSignIn && (
          <div>
            <h1 className="text-3xl font-bold">Welcome back</h1>
            <p className="text-base font-semibold">
              Enter your personal details to login.
            </p>
            <Button
              className="mt-4 hover:bg-transparent"
              onClick={() => onSetActiveForm('sign-up')}
            >
              Sign Up
            </Button>
          </div>
        )}
        {isSignUp && (
          <div>
            <h1 className="text-3xl font-bold">Hello friend</h1>
            <p className="text-base font-semibold">
              Register your personal details to login.
            </p>
            <Button
              className="mt-4 hover:bg-transparent"
              onClick={() => onSetActiveForm('sign-in')}
            >
              Sign In
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
