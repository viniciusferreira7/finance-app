'use client'

import { useAutoAnimate } from '@formkit/auto-animate/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import * as Input from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { useCreateSession } from '../../hooks/mutations/use-create-session'

const signInFormSchema = z.object({
  email: z.string().email({ message: 'Invalid e-mail address.' }).toLowerCase(),
  password: z
    .string()
    .min(6, { message: 'The password must be at least 6 characters long.' }),
})

type SignInFormInput = z.infer<typeof signInFormSchema>

export function SignInForm() {
  const { mutate, isPending } = useCreateSession()
  const [parent] = useAutoAnimate()

  const [isHiddenPassword, setIsHiddenPassword] = useState(true)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormInput>({
    resolver: zodResolver(signInFormSchema),
  })

  function handleSignIn(data: SignInFormInput) {
    mutate({
      email: data.email,
      password: data.password,
    })
  }

  const passwordType = isHiddenPassword ? 'password' : 'text'

  return (
    <form
      ref={parent}
      className="space-y-3"
      onSubmit={handleSubmit(handleSignIn)}
    >
      <div ref={parent} className="space-y-2">
        <Label htmlFor="email" isError={!!errors.email}>
          Email
        </Label>
        <Input.Root isError={!!errors.email}>
          <Input.Control id="email" {...register('email')} />
        </Input.Root>
        {!!errors.email && (
          <Input.HelperText isError={!!errors.email}>
            {String(errors.email.message)}
          </Input.HelperText>
        )}
      </div>
      <div ref={parent} className="space-y-2">
        <Label htmlFor="password" isError={!!errors.password}>
          Password
        </Label>
        <Input.Root isError={!!errors.password}>
          <Input.Control
            id="password"
            type={passwordType}
            {...register('password')}
          />
          {isHiddenPassword ? (
            <EyeOff
              className="size-4"
              onClick={() => setIsHiddenPassword(false)}
            />
          ) : (
            <Eye className="size-4" onClick={() => setIsHiddenPassword(true)} />
          )}
        </Input.Root>
        {!!errors.password && (
          <Input.HelperText isError={!!errors.password}>
            {String(errors.password.message)}
          </Input.HelperText>
        )}
      </div>
      <Button className="w-full" disabled={isPending}>
        {isPending ? 'loading...' : 'Sign-in'}
      </Button>
      <div className="flex w-full justify-center pt-8">
        <Link href="/sign-up" className="text-base font-semibold">
          or sign-up
        </Link>
      </div>
    </form>
  )
}
