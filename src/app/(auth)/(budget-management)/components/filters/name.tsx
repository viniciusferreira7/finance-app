'use client'

import { useFormContext } from 'react-hook-form'

import * as Input from '@/components/ui/input'

export function Name() {
  const { register } = useFormContext()

  return (
    <Input.Root className="w-full sm:w-auto">
      <Input.Control placeholder="name" {...register('name')} />
    </Input.Root>
  )
}
