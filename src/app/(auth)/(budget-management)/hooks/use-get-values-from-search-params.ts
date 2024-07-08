'use client'

import dayjs from 'dayjs'
import { useSearchParams } from 'next/navigation'
import { FieldValues, UseFormSetValue } from 'react-hook-form'

type SchemaKeys =
  | 'name'
  | 'value'
  | 'sort'
  | 'createdAtFrom'
  | 'createdAtTo'
  | 'updatedAtFrom'
  | 'updatedAtTo'
  | 'category'

interface Params {
  arr: string[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fn: UseFormSetValue<FieldValues>
}

export const useGetValuesFromSearchParams = ({ arr, fn }: Params) => {
  const searchParams = useSearchParams()

  function getValuesFromSearchParams() {
    arr.forEach((name) => {
      const value = searchParams.get(name)

      const isValidDate = dayjs(value).isValid()

      if (name.includes('dAt')) {
        if (name === 'createdAtFrom' && isValidDate) {
          fn('createdAt.from', dayjs(value).toDate())
        }
        if (name === 'createdAtTo' && isValidDate) {
          fn('createdAt.to', dayjs(value).toDate())
        }
        if (name === 'updatedAtFrom' && isValidDate) {
          fn('updatedAt.from', dayjs(value).toDate())
        }
        if (name === 'updatedAtTo' && isValidDate) {
          fn('updatedAt.to', dayjs(value).toDate())
        }
      } else {
        fn(name as SchemaKeys, value)
      }
    })
  }

  return { arr, getValuesFromSearchParams }
}
