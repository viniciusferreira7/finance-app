'use client'

import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useFormContext } from 'react-hook-form'

import * as Input from '@/components/ui/input'

export function Value() {
  const [parent] = useAutoAnimate()

  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div ref={parent} className="w-full sm:w-auto">
      <Input.Root isError={!!errors.value} className="h-full w-full">
        <Input.Control placeholder="value" {...register('value')} />
      </Input.Root>
      {!!errors.value && (
        <Input.HelperText isError={!!errors.value}>
          {errors.value.message?.toString()}
        </Input.HelperText>
      )}
    </div>
  )
}
