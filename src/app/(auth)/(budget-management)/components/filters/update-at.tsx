'use client'

import { useFormContext } from 'react-hook-form'

import * as Input from '@/components/ui/input'

export function UpdateAt() {
  const { register } = useFormContext()

  return (
    <Input.Root>
      <Input.Control placeholder="update at" {...register('updateAt')} />
    </Input.Root>
  )
}
