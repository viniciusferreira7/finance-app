import { Metadata } from 'next'

import { SignInForm } from './components'

export const metadata: Metadata = {
  title: 'Sign in',
}

export default function SignInPage() {
  return (
    <div className="w-full max-w-96 space-y-3">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Sign-in</h1>
        <h2 className="font-normal text-foreground">
          Enter your personal details to login.
        </h2>
      </div>
      <SignInForm />
    </div>
  )
}
