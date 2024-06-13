'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Eraser, ListFilter } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { removeUndefinedValues } from '@/utils/remove-undefined-values'

const FiltersFormSchema = z.object({
  name: z.string().optional(),
  value: z.string().optional(), // TODO: add validation and transformation to a number
  createdAt: z.date().optional(),
  updateAt: z.date().optional(),
  categories: z.string().optional(),
  sort: z.enum(['asc', 'desc']).optional(),
})

type FiltersFormSchemaInput = z.input<typeof FiltersFormSchema>

interface FiltersProps {
  children: ReactNode
}

export function Filters({ children }: FiltersProps) {
  const router = useRouter()
  const methods = useForm<FiltersFormSchemaInput>({
    resolver: zodResolver(FiltersFormSchema),
  })

  const { handleSubmit, reset } = methods

  function handleFilter(data: FiltersFormSchemaInput) {
    const formattedSearchParams = removeUndefinedValues(data)
    const queries = new URLSearchParams(formattedSearchParams)

    router.push('?' + queries)
  }

  return (
    <div className="mb-3 space-y-2 ">
      <h2 className="text-semibold">Filters</h2>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(handleFilter)}
          className="flex items-center gap-2"
        >
          {children}
          <Button variant="outline" onClick={() => reset()}>
            <Eraser className="size-3" /> Clear
          </Button>
          <Button>
            <ListFilter className="size-3" /> Filter
          </Button>
        </form>
      </FormProvider>
    </div>
  )
}
