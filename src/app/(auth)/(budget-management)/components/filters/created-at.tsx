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

export function CreatedAt() {
  const { control } = useFormContext()

  return (
    <Controller
      name="createdAt"
      control={control}
      render={({ field: { value, onChange } }) => {
        const formattedDate = value
          ? dayjs(value).format('YYYY-MM-DD')
          : 'Created at'

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
                {formattedDate}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
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
