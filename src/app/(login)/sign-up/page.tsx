import { Metadata } from 'next'

import { SignUpForm } from './components'

export const metadata: Metadata = {
  title: 'Sign up',
}

export default function SignUpPage() {
  return (
    <div className="w-full max-w-96 space-y-3">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Sign-up</h1>
        <h2 className="font-normal text-foreground">
          Register your personal details to login.
        </h2>
      </div>
      <SignUpForm />
    </div>
  )
}
