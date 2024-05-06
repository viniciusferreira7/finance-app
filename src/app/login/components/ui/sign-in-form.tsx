import { useAutoAnimate } from '@formkit/auto-animate/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { IconBrandGoogle, IconLock, IconLockOpen } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { setCookie } from '@/app/utils/cookie/setCookie'
import { Button } from '@/components/ui/button'
import * as Input from '@/components/ui/input'

import { useLogin } from '../../contexts'

const signInFormSchema = z.object({
  email: z.string().email({ message: 'Invalid e-mail address.' }),
  password: z
    .string()
    .min(6, { message: 'The password must be at least 6 characters long.' }),
})

type SignInFormSchemaInput = z.infer<typeof signInFormSchema>

export function SignInForm() {
  const [parent] = useAutoAnimate()
  const router = useRouter()
  const [isPasswordHidden, setIsPasswordHidden] = useState(true)
  const { onSetActiveForm } = useLogin()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormSchemaInput>({
    resolver: zodResolver(signInFormSchema),
  })

  async function handleLogin(data: SignInFormSchemaInput) {
    console.log(data)
    await setCookie(
      'finance-token',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
    )

    router.push('/')
  }

  function handleHiddenPassword() {
    setIsPasswordHidden((state) => !state)
  }

  const inputType = isPasswordHidden ? 'password' : 'text'
  const isPasswordType = inputType === 'password'

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="flex flex-col gap-3 p-4 md:px-10"
    >
      <div className="text-center">
        <h1 className="text-3xl font-bold">Sign In</h1>
        <Button
          type="button"
          variant="outline"
          size="xxs"
          className="mb-5 mt-4 p-1"
          disabled
          onClick={() => signIn('google', { callbackUrl: ' / ' })}
          title="Sign in with your Google account"
        >
          <IconBrandGoogle className="size-5" /> +
        </Button>
        <h2 className="font-medium">
          Or enter your e-mail address and password below to enter your account.
        </h2>
      </div>
      <div className="space-y-3">
        <div ref={parent}>
          <Input.Root>
            <Input.Control placeholder="Email" {...register('email')} />
          </Input.Root>
          {!!errors.email && (
            <Input.HelperText isError={!!errors.email}>
              {errors.email.message}
            </Input.HelperText>
          )}
        </div>
        <div ref={parent}>
          <Input.Root className="transition-transform">
            <Input.Control
              id="password"
              type={inputType}
              placeholder="Password"
              {...register('password')}
            />
            {isPasswordType ? (
              <IconLock
                className="size-5 cursor-pointer text-gray-500"
                onClick={handleHiddenPassword}
              />
            ) : (
              <IconLockOpen
                className="text-white-500 size-5 cursor-pointer"
                onClick={handleHiddenPassword}
              />
            )}
          </Input.Root>
          {!!errors.password && (
            <Input.HelperText isError={!!errors.password}>
              {errors.password.message}
            </Input.HelperText>
          )}
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          Sign In
        </Button>
      </div>
      <div className="mt-4 flex w-full justify-center md:hidden">
        <Button
          type="button"
          variant="ghost"
          size="xxs"
          onClick={() => onSetActiveForm('sign-up')}
        >
          or sing-up
        </Button>
      </div>
    </form>
  )
}