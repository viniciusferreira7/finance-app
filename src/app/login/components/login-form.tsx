'use client'

import { useAutoAnimate } from '@formkit/auto-animate/react'

import { cn } from '@/lib/utils'

import { useLogin } from '../contexts'
import { SignInForm, SignUpForm, Toggle } from './ui'

export function LoginForm() {
  const [parent] = useAutoAnimate()
  const { activeForm } = useLogin()

  const isSignIn = activeForm === 'sign-in'
  const isSignUp = activeForm === 'sign-up'

  return (
    <main className="relative h-[30rem] w-full max-w-4xl overflow-hidden rounded-3xl bg-gray-950 shadow-container-login">
      <Toggle />
      <div
        ref={parent}
        className={cn(
          'absolute left-0 top-0 z-10 grid h-full w-full place-items-center duration-700 md:w-6/12',
          isSignUp && 'md:translate-x-full',
        )}
      >
        {isSignIn && <SignInForm />}
        {isSignUp && <SignUpForm />}
      </div>
    </main>
  )
}
