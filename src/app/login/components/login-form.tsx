'use client'

import { Button } from '@/components/ui/button'
import * as Input from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { zodResolver } from '@hookform/resolvers/zod'
import { IconLock, IconLockOpen } from '@tabler/icons-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'

const loginFormSchema = z.object({
  email: z.string().email({ message: 'E-mail inválido.' }),
  password: z
    .string()
    .min(6, { message: 'A senha deve possuir no mínimo 6 caracteres.' }),
})

type LoginFormSchemaInput = z.infer<typeof loginFormSchema>

export function LoginForm() {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormSchemaInput>({
    resolver: zodResolver(loginFormSchema),
  })

  function handleLogin(data: LoginFormSchemaInput) {
    console.log(data)
  }

  // TODO: Create validation to email and password.
  // TODO: Begin next page, maybe you should create home.

  console.log(errors)

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
        <Input.Root>
          <Input.Control placeholder="Email" {...register('email')} />
        </Input.Root>
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

          {/* TODO: Put label in inputs */}
        </Input.Root>
        <Button type="submit" className="w-full">
          Entrar
        </Button>
      </div>
    </form>
  )
}
