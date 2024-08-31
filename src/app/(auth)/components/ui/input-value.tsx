'use client'

import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Controller, useFormContext } from 'react-hook-form'
import { NumericFormat } from 'react-number-format'

import * as Input from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function InputValue() {
  const [parent] = useAutoAnimate()

  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <Controller
      name="value"
      control={control}
      render={({ field: { ref, value, onChange, ...inputProps } }) => {
        return (
          <div ref={parent} className="space-y-2">
            <Label htmlFor="value" isError={!!errors.value}>
              Value
            </Label>
            <Input.Root isError={!!errors.value}>
              <NumericFormat
                id="value"
                value={value}
                onChange={(e) =>
                  onChange(e.target.value.replace(/[^0-9]/g, ''))
                }
                thousandSeparator="."
                decimalSeparator=","
                prefix="$ "
                decimalScale={2}
                getInputRef={ref}
                customInput={Input.Control}
                {...inputProps}
              />
            </Input.Root>
            {!!errors.value && (
              <Input.HelperText isError={!!errors.value}>
                {errors.value.message?.toString()}
              </Input.HelperText>
            )}
          </div>
        )
      }}
    />
  )
}
