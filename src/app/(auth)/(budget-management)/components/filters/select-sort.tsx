'use client'

import { Controller, useFormContext } from 'react-hook-form'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function SelectSort() {
  const { control } = useFormContext()

  return (
    <Controller
      name="sort"
      control={control}
      render={({ field: { value, onChange } }) => {
        return (
          <Select
            value={value ?? ''}
            onValueChange={(e) => {
              if (e) {
                onChange(e)
              }
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a sort" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Sorts</SelectLabel>
                <SelectItem value="asc">Ascending</SelectItem>
                <SelectItem value="desc">Descending</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        )
      }}
    />
  )
}
