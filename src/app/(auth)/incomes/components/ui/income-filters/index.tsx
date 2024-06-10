'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Eraser, ListFilter } from 'lucide-react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import * as Input from '@/components/ui/input'

import { SelectSort } from './components'
import { SelectCategories } from './components/select-categories'

const incomeFiltersFormSchema = z.object({
  name: z.string().optional(),
  value: z.string().optional(), // TODO: add validation and transformation to a number
  createdAt: z.date().optional(),
  updateAt: z.date().optional(),
  categories: z.string().optional(),
  sort: z.enum(['asc', 'desc']),
})

type IncomeFiltersFormSchemaInput = z.input<typeof incomeFiltersFormSchema>

export function IncomesFilters() {
  const methods = useForm<IncomeFiltersFormSchemaInput>({
    resolver: zodResolver(incomeFiltersFormSchema),
  })

  const { handleSubmit, register, reset } = methods

  function handleFilterIncome(data: IncomeFiltersFormSchemaInput) {
    console.log(data)
    // TODO: insert data in URL equal you do in a other project
  }

  return (
    <div className="mb-3 space-y-2 ">
      <h2 className="text-semibold">Filters</h2>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(handleFilterIncome)}
          className="flex items-center gap-2"
        >
          <Input.Root>
            <Input.Control placeholder="name" {...register('name')} />
          </Input.Root>
          <Input.Root>
            <Input.Control placeholder="value" {...register('value')} />
          </Input.Root>
          <Input.Root>
            <Input.Control
              placeholder="Created at"
              {...register('createdAt')}
            />
          </Input.Root>
          <Input.Root>
            <Input.Control placeholder="Update at" {...register('updateAt')} />
          </Input.Root>
          <SelectCategories />
          <SelectSort />
          <Button variant="outline" onClick={() => reset()}>
            <Eraser className="size-3" /> Filter
          </Button>
          <Button>
            <ListFilter className="size-3" /> Filter
          </Button>
        </form>
      </FormProvider>
    </div>
  )
}
