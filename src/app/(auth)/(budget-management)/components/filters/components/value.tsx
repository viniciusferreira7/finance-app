'use client'

import { useFormContext } from 'react-hook-form'

import * as Input from '@/components/ui/input'

export function Value() {
  const { register } = useFormContext()

  return (
    <Input.Root>
      <Input.Control placeholder="value" {...register('value')} />
    </Input.Root>
  )
}
