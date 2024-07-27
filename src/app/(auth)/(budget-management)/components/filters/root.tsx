'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import dayjs from 'dayjs'
import { Eraser, ListFilter } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { ReactNode, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { removeUndefinedValues } from '@/utils/remove-undefined-values'

import { useGetValuesFromSearchParams } from '../../hooks/use-get-values-from-search-params'

const filtersRootFormSchema = z.object({
  name: z.string().nullable().optional(),
  value: z
    .string()
    .nullable()
    .optional()
    .refine((value) => (value ? Number(value) : true), {
      message: 'Must be a number',
    })
    .refine((value) => (value ? Number(value) >= 0 : true), {
      message: 'Must be a positive number',
    })
    .transform((value) => value?.match(/\d+/g)),
  createdAt: z
    .object({
      from: z
        .date()
        .transform((from) => (from ? dayjs(from).format('YYYY-MM-DD') : null))
        .optional(),
      to: z
        .date()
        .transform((to) => (to ? dayjs(to).format('YYYY-MM-DD') : null))
        .optional(),
    })
    .optional()
    .nullable(),
  updatedAt: z
    .object({
      from: z
        .date()
        .transform((from) => (from ? dayjs(from).format('YYYY-MM-DD') : null))
        .optional(),
      to: z
        .date()
        .transform((to) => (to ? dayjs(to).format('YYYY-MM-DD') : null))
        .optional(),
    })
    .optional()
    .nullable(),
  category: z.string().nullable().optional(),
  sort: z.enum(['asc', 'desc', '']).nullable().optional(),
})

type FiltersRootFormSchemaInput = z.input<typeof filtersRootFormSchema>

interface FiltersRootProps {
  children: ReactNode
}

export function FiltersRoot({ children }: FiltersRootProps) {
  const router = useRouter()
  const pathname = usePathname()
  const methods = useForm<FiltersRootFormSchemaInput>({
    resolver: zodResolver(filtersRootFormSchema),
  })

  const {
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = methods

  function handleReset() {
    reset({
      name: '',
      value: '',
      sort: 'desc',
      category: '',
      createdAt: {
        from: undefined,
        to: undefined,
      },
      updatedAt: {
        from: undefined,
        to: undefined,
      },
    })
    router.push(pathname)
  }

  function handleFilter(data: FiltersRootFormSchemaInput) {
    const formattedData = {
      ...data,
      createdAt: undefined,
      updatedAt: undefined,
      createdAtFrom: data.createdAt?.from,
      createdAtTo: data.createdAt?.to,
      updatedAtFrom: data.updatedAt?.from,
      updatedAtTo: data.updatedAt?.to,
    }

    const formattedSearchParams = removeUndefinedValues(formattedData)
    const queries = new URLSearchParams({ ...formattedSearchParams, page: '1' })

    router.replace('?' + queries, {
      scroll: false,
    })
  }

  const { getValuesFromSearchParams } = useGetValuesFromSearchParams({
    arr: [
      'name',
      'value',
      'createdAtFrom',
      'createdAtTo',
      'updatedAtFrom',
      'updatedAtTo',
      'category',
      'sort',
    ],
    fn: setValue,
  })

  useEffect(() => {
    getValuesFromSearchParams()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const isError = !!Object.keys(errors).length

  return (
    <div className="mb-3 space-y-2 ">
      <h2 className="text-semibold">Filters</h2>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(handleFilter)}
          className={cn(
            'flex flex-wrap items-stretch gap-2',
            !!isError && 'items-start',
            'flex-col sm:flex-row',
          )}
        >
          {children}
          <div className="flex justify-center gap-2 md:justify-normal">
            <Button type="button" variant="outline" onClick={handleReset}>
              <Eraser className="size-3" /> Clear
            </Button>
            <Button disabled={!!isError}>
              <ListFilter className="size-3" /> Filter
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}
