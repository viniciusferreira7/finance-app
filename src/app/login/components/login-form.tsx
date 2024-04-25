'use client'

import { setCookie } from '@/app/utils/cookie/setCookie'
import { Button } from '@/components/ui/button'
import * as Input from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { IconBrandGoogle, IconLock, IconLockOpen } from '@tabler/icons-react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { useRouter } from 'next/navigation'

const loginFormSchema = z.object({
  email: z.string().email({ message: 'E-mail inválido.' }),
  password: z
    .string()
    .min(6, { message: 'A senha deve possuir no mínimo 6 caracteres.' }),
})

type LoginFormSchemaInput = z.infer<typeof loginFormSchema>

export function LoginForm() {
  const [parent] = useAutoAnimate()
  const router = useRouter()
  const [isPasswordHidden, setIsPasswordHidden] = useState(true)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormSchemaInput>({
    resolver: zodResolver(loginFormSchema),
  })

  async function handleLogin(data: LoginFormSchemaInput) {
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
      className="flex w-full max-w-md flex-col gap-3"
    >
      <div className="text-center">
        <h1 className="text-3xl font-bold">Crie uma conta</h1>
        <h2 className="font-medium">
          Introduza o seu e-mail e senha abaixo para criar a sua conta
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
              placeholder="Senha"
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
          type="button"
          variant="outline"
          className="w-full gap-2"
          disabled={isSubmitting}
          onClick={() => signIn('google', { callbackUrl: '/' })}
        >
          <IconBrandGoogle />
          Entrar com o Google
        </Button>
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          Entrar
        </Button>
      </div>
    </form>
  )
}
