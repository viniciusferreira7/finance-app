'use client'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@radix-ui/react-popover'
import dayjs from 'dayjs'
import { CalendarIcon } from 'lucide-react'
import { Controller, useFormContext } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { cn } from '@/lib/utils'

export function UpdatedAt() {
  const { control, watch } = useFormContext()

  return (
    <Controller
      name="updatedAt"
      control={control}
      render={({ field: { value, onChange } }) => {
        value = watch('updatedAt')

        const formattedDateFrom = value?.from
          ? dayjs(value.from).format('YYYY-MM-DD')
          : null

        const formattedDateTo = value?.to
          ? dayjs(value.to).format('YYYY-MM-DD')
          : null

        const label =
          formattedDateFrom && formattedDateTo
            ? `${formattedDateFrom} to ${formattedDateTo}`
            : formattedDateFrom || 'update at'

        return (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  'w-full justify-start text-left font-normal sm:w-[240px]',
                  !value && 'text-muted-foreground',
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {label}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="range"
                selected={value}
                onSelect={onChange}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        )
      }}
    />
  )
}
