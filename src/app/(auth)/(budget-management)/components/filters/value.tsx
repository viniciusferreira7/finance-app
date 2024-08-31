'use client'

import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Controller, useFormContext } from 'react-hook-form'
import { NumericFormat } from 'react-number-format'

import * as Input from '@/components/ui/input'

export function Value() {
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
          <div ref={parent} className="w-full sm:w-auto">
            <Input.Root isError={!!errors.value} className="h-full w-full">
              <NumericFormat
                id="value"
                value={value}
                onChange={(e) =>
                  onChange(e.target.value.replace(/[^0-9]/g, ''))
                }
                thousandSeparator=","
                decimalSeparator="."
                prefix="$ "
                decimalScale={2}
                getInputRef={ref}
                placeholder="value"
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
