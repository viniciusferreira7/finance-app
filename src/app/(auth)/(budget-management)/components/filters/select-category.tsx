'use client'

import { Check, ChevronsUpDown } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import { useFetchCategories } from '@/app/(auth)/hooks/queries/use-fetch-categories'
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

export function SelectCategory() {
  const { data: categories, isLoading, setParams } = useFetchCategories()
  const [open, setOpen] = useState(false)

  const {
    control,
    formState: { errors },
  } = useFormContext()

  const isError = !!errors.category

  useEffect(() => {
    setParams((state) => ({
      ...state,
      searchParams: { ...state.searchParams, pagination_disabled: true },
    }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Controller
      name="category"
      control={control}
      render={({ field: { value, onChange } }) => {
        const selectedValue = value
          ? categories?.results?.find((category) => category.id === value)
              ?.name ?? 'Select a category'
          : 'Select a category'

        return (
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                disabled={isLoading}
                aria-expanded={open}
                className={cn(
                  'w-full justify-between truncate font-normal sm:w-[200px]',
                  isError && 'border-destructive text-destructive',
                )}
              >
                {isLoading ? (
                  'Loading categories...'
                ) : (
                  <>
                    {selectedValue}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search categories..." />
                <CommandList>
                  <CommandEmpty>No category found.</CommandEmpty>
                  <CommandGroup className="h-64">
                    {categories?.results?.map((category) => (
                      <CommandItem
                        key={category.id}
                        value={category.name}
                        onSelect={(currentValue) => {
                          const findCategoryByName = categories.results.find(
                            (category) => category.name === currentValue,
                          )

                          if (findCategoryByName) {
                            onChange(findCategoryByName.id)
                            setOpen(false)
                          }
                        }}
                      >
                        <Check
                          className={cn(
                            'mr-2 h-4 w-4',
                            value === category.name
                              ? 'opacity-100'
                              : 'opacity-0',
                          )}
                        />
                        {category.name}
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
