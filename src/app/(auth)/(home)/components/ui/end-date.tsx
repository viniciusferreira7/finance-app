'use client'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@radix-ui/react-popover'
import dayjs from 'dayjs'
import { CalendarIcon } from 'lucide-react'
import { useQueryState } from 'nuqs'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { cn } from '@/lib/utils'

export function EndDate() {
  const [endDate, setEndDate] = useQueryState('endDate')

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            'w-1/5 justify-start text-left font-normal sm:w-[240px]',
            !endDate && 'text-muted-foreground',
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {endDate || 'Select a date'}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={dayjs(endDate).toDate()}
          onSelect={(date) => {
            if (date) {
              const formattedDate = dayjs(date).format('YYYY-MM-DD')
              setEndDate(formattedDate)
            }
          }}
          initialFocus
          numberOfMonths={2}
        />
      </PopoverContent>
    </Popover>
  )
}
