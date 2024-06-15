'use client'

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
  // TODO: Create Controller

  return (
    <Select>
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
}
