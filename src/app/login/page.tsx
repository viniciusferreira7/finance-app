import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { LoginForm } from './components'
import { LoginProvider } from './contexts'

export default function LoginPage() {
  const hasTokenFinance = cookies().has('finance-token')
  const hasTokenGoogle = cookies().has('next-auth.session-token')

  if (hasTokenFinance || hasTokenGoogle) {
    redirect('/')
  }

  return (
    <LoginProvider>
      <div className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-r from-indigo-950 to-gray-950 p-4">
        <LoginForm />
      </div>
    </LoginProvider>
  )
}
