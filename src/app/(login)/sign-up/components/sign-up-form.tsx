'use client'

import { useAutoAnimate } from '@formkit/auto-animate/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { IconEye, IconEyeClosed } from '@tabler/icons-react'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import * as Input from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { useCreateUser } from '../../hooks/mutations'
import { useCreateSession } from '../../hooks/mutations/use-create-session'

const signUpFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'The name must have at least 3 letters.' }),
  email: z.string().email({ message: 'Invalid e-mail address.' }).toLowerCase(),
  password: z
    .string()
    .min(6, { message: 'The password must be at least 6 characters long.' }),
})

type SignUpFormInput = z.infer<typeof signUpFormSchema>

export function SignUpForm() {
  const { mutate, isPending } = useCreateUser()
  const { mutate: mutateSession, isPending: IsPendingSession } =
    useCreateSession()

  const [parent] = useAutoAnimate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInput>({
    resolver: zodResolver(signUpFormSchema),
  })

  const [isHiddenPassword, setIsHiddenPassword] = useState(true)

  function handleSignUp(data: SignUpFormInput) {
    mutate(
      {
        name: data.name,
        email: data.email,
        password: data.password,
      },
      {
        onSuccess: () => {
          mutateSession(
            {
              email: data.email,
              password: data.password,
            },
            {
              onSuccess: () => {
                toast.success('Session created for your user.')
              },
            },
          )
        },
      },
    )
  }

  const passwordType = isHiddenPassword ? 'password' : 'text'

  return (
    <form className="space-y-3" onSubmit={handleSubmit(handleSignUp)}>
      <div ref={parent} className="space-y-2">
        <Label htmlFor="Email" isError={!!errors.name}>
          Name
        </Label>
        <Input.Root isError={!!errors.name}>
          <Input.Control id="name" {...register('name')} />
        </Input.Root>
        {!!errors.name && (
          <Input.HelperText isError={!!errors.name}>
            {errors.name.message}
          </Input.HelperText>
        )}
      </div>
      <div ref={parent} className="space-y-2">
        <Label htmlFor="email" isError={!!errors.email}>
          Email
        </Label>
        <Input.Root isError={!!errors.email}>
          <Input.Control id="email" {...register('email')} />
        </Input.Root>
        {!!errors.email && (
          <Input.HelperText isError={!!errors.email}>
            {errors.email.message}
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
            <IconEyeClosed
              className="size-4"
              onClick={() => setIsHiddenPassword(false)}
            />
          ) : (
            <IconEye
              className="size-4"
              onClick={() => setIsHiddenPassword(true)}
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
        className="w-full"
        type="submit"
        disabled={isPending || IsPendingSession}
      >
        {isPending || IsPendingSession ? 'loading...' : 'Sign-up'}
      </Button>
      <div className="flex w-full justify-center pt-8">
        <Link href="/sign-in" className="text-base font-semibold">
          or sign-in
        </Link>
      </div>
    </form>
  )
}
