'use client'

import dayjs from 'dayjs'
import { useSearchParams } from 'next/navigation'
import { FieldValues, UseFormSetValue } from 'react-hook-form'

interface Params<T extends object> {
  obj: T
  fn: UseFormSetValue<FieldValues>
}

export const useGetValuesFromSearchParams = <T extends object>({
  obj,
  fn,
}: Params<T>) => {
  const searchParams = useSearchParams()

  function getValuesFromSearchParams() {
    Object.entries(obj).forEach(([key]) => {
      const value = searchParams.get(key)

      const dateFields = key.includes('edAt')
      const isValidDate = dayjs(value).isValid()

      if (dateFields && isValidDate) {
        fn(key, dayjs(value).toDate())
      } else {
        fn(key, value)
      }
    })
  }

  return { obj, getValuesFromSearchParams }
}
