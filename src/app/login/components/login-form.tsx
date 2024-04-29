'use client'

import { CreateForm, SignInForm, ToggleLeft, ToggleRight } from './ui'

export function LoginForm() {
  // TODO: Video stop in 10:41

  return (
    <main className="shadow-container-login relative h-[30rem] w-full max-w-3xl overflow-hidden rounded-3xl bg-gray-950">
      <CreateForm />
      <SignInForm />
      <ToggleLeft />
      <ToggleRight />
    </main>
  )
}
