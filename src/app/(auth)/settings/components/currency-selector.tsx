'use client'

import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'

import { useExchangeRates } from '../hooks/atoms/use-exchange-rates'
import { useGetExchangeRates } from '../hooks/queries/use-get-exchange-rates'

export function CurrencySelector() {
  const [exchangeRate, setExchangeRate] = useExchangeRates()
  const [open, setOpen] = React.useState(false)

  const { data } = useGetExchangeRates()

  const currencies: [string, number][] = data ? Object.entries(data?.rates) : []

  return (
    <div className="space-y-4 rounded-md border p-2">
      <h2 className="text-bold text-lg">Select your exchange rates</h2>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {exchangeRate
              ? Object.entries(exchangeRate).map(([currency, value]) => {
                  return `${currency} - ${value}`
                })
              : 'Select currency...'}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search a currency..." className="h-9" />
            <CommandList>
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {currencies.map(([currency, value]) => (
                  <CommandItem
                    key={currency}
                    value={currency}
                    onSelect={(currentValue) => {
                      setExchangeRate({ [currentValue]: value })
                      setOpen(false)
                    }}
                  >
                    {currency} - {value}
                    <CheckIcon
                      className={cn(
                        'ml-auto h-4 w-4',
                        exchangeRate === currency ? 'opacity-100' : 'opacity-0',
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
