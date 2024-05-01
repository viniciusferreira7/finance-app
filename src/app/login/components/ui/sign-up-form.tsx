'use'

import { useAutoAnimate } from '@formkit/auto-animate/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { IconBrandGoogle, IconLock, IconLockOpen } from '@tabler/icons-react'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import * as Input from '@/components/ui/input'

import { useCreateUser } from '../../hooks/mutations'

const SignUpFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'The name must have at least 3 letters.' }),
  email: z.string().email({ message: 'Invalid e-mail address.' }),
  password: z
    .string()
    .min(6, { message: 'The password must be at least 6 characters long.' }),
})

type signUpFormSchemaInput = z.infer<typeof SignUpFormSchema>

export function SignUpForm() {
  const [parent] = useAutoAnimate()
  const { mutate, isPending } = useCreateUser()
  const [isPasswordHidden, setIsPasswordHidden] = useState(true)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<signUpFormSchemaInput>({
    resolver: zodResolver(SignUpFormSchema),
  })

  function handleLogin(data: signUpFormSchemaInput) {
    mutate({
      name: data.name,
      email: data.email,
      password: data.password,
    })
  }

  function handleHiddenPassword() {
    setIsPasswordHidden((state) => !state)
  }

  const inputType = isPasswordHidden ? 'password' : 'text'
  const isPasswordType = inputType === 'password'

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="flex flex-col gap-3 px-10"
    >
      <div className="text-center">
        <h1 className="text-3xl font-bold">Create Account</h1>
        <Button
          type="button"
          variant="outline"
          size="xxs"
          className="mb-5 mt-4 p-1"
          disabled
          onClick={() => signIn('google', { callbackUrl: '/' })}
          title="Sign in with your Google account"
        >
          <IconBrandGoogle className="size-5" /> +
        </Button>
        <h2 className="font-medium">
          Or enter your e-mail address and password below to create your
          account.
        </h2>
      </div>
      <div className="space-y-3">
        <div ref={parent}>
          <Input.Root>
            <Input.Control placeholder="Name" {...register('name')} />
          </Input.Root>
          {!!errors.name && (
            <Input.HelperText isError={!!errors.name}>
              {errors.name.message}
            </Input.HelperText>
          )}
        </div>
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
        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting || isPending}
        >
          Sign Up
        </Button>
      </div>
    </form>
  )
}
