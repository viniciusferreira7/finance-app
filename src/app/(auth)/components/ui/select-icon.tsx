'use client'

import { Check, ChevronsUpDown } from 'lucide-react'
import * as Icon from 'lucide-react'
import { useDeferredValue, useMemo, useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

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

export function SelectIcon() {
  const [open, setOpen] = useState(false)

  const icons = useMemo(() => Object.entries(Icon), [])
  const deferredValue = useDeferredValue(icons)

  const {
    control,
    formState: { errors },
  } = useFormContext()

  const isError = !!errors.category

  // TODO: Improves icon rendering performance

  return (
    <Controller
      name="icon-name"
      control={control}
      render={({ field: { value, onChange } }) => {
        const icon = deferredValue.find(([name]) => name === value)
        let iconName = ''
        if (icon) {
          iconName = icon[0]
        }

        const selectedValue = value ? iconName : '...'
        return (
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className={cn(
                  'w-full justify-between font-normal',
                  isError && 'border-destructive text-destructive',
                )}
              >
                {selectedValue}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="start"
              className="p-0 sm:w-[200px] lg:w-[350px]"
            >
              <Command>
                <CommandInput placeholder="Search icons..." />
                <CommandList>
                  <CommandEmpty>No category found.</CommandEmpty>
                  <CommandGroup className="overflow-y-auto overflow-x-hidden">
                    {deferredValue.map(([name]) => (
                      <CommandItem
                        key={name}
                        value={name}
                        onSelect={(currentValue) => {
                          onChange(currentValue === value ? '' : currentValue)
                          setOpen(false)
                        }}
                      >
                        <Check
                          className={cn(
                            'mr-2 h-4 w-4',
                            value === name ? 'opacity-100' : 'opacity-0',
                          )}
                        />
                        {name}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        )
      }}
    />
  )
}
