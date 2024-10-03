'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import dayjs from 'dayjs'
import { Eraser, ListFilter } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useQueryState } from 'nuqs'
import { ReactNode } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'


const filtersRootFormSchema = z.object({
  name: z.string().nullish(),
  value: z
    .string()
    .nullish()
    .refine((value) => (value ? Number(value) : true), {
      message: 'Must be a number',
    })
    .refine((value) => (value ? Number(value) >= 0 : true), {
      message: 'Must be a positive number',
    })
    .transform((value) => value?.match(/\d+/g)).transform(String),
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
    .nullish(),
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
    .nullish(),
  category: z.string().nullish(),
  sort: z.string().nullish(),
})

type FiltersRootFormSchemaInput = z.input<typeof filtersRootFormSchema>
type FiltersRootFormSchemaOutput = z.output<typeof filtersRootFormSchema>

interface FiltersRootProps {
  children: ReactNode
}

export function FiltersRoot({ children }: FiltersRootProps) {
  const [name, setName] = useQueryState('name')
  const [value, setValue] = useQueryState('value')
  const [createdAtFrom, setCreatedAtFrom] = useQueryState('createdAtFrom')
  const [createdAtTo, setCreatedAtTo] = useQueryState('createdAtTo')
  const [updatedAtFrom, setUpdatedAtFrom] = useQueryState('updatedAtFrom')
  const [updatedAtTo, setUpdatedAtTo] = useQueryState('updatedAtTo')
  const [category, setCategory] = useQueryState('category')
  const [sort, setSort] = useQueryState('sort')
  const router = useRouter()
  const methods = useForm<FiltersRootFormSchemaInput, any, FiltersRootFormSchemaOutput>({
    resolver: zodResolver(filtersRootFormSchema),
    values: {
      name,
      value,
      createdAt: {
        from:  createdAtFrom ? dayjs(createdAtFrom).toDate(): undefined,
        to: createdAtTo ? dayjs(createdAtTo).toDate(): undefined,
      },
      updatedAt: {
        from:  updatedAtFrom ? dayjs(updatedAtFrom).toDate(): undefined,
        to: updatedAtTo ? dayjs(updatedAtTo).toDate(): undefined,
      },
      category,
      sort,
    },
  })

  const {
    handleSubmit,
    reset,
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

    setName(null)
    setValue(null)
    setCreatedAtFrom(null)
    setCreatedAtTo(null)
    setUpdatedAtFrom(null)
    setUpdatedAtTo(null)
    setCategory(null)
    setSort(null)
  }

  function handleFilter(data: FiltersRootFormSchemaOutput) {
    setName(data.name ?? null);
    setValue(data.value ?? null);
    setCreatedAtFrom(data.createdAt?.from ?? null);
    setCreatedAtTo(data.createdAt?.to ?? null);
    setUpdatedAtFrom(data.updatedAt?.from ?? null);
    setUpdatedAtTo(data.updatedAt?.to ?? null);
    setCategory(data.category ?? null);
    setSort(data.sort ?? null);
    }

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
