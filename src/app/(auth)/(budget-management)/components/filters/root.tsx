'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Eraser, ListFilter } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { ReactNode } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { removeUndefinedValues } from '@/utils/remove-undefined-values'

const FiltersRootFormSchema = z.object({
  name: z.string().optional(),
  value: z.string().optional(), // TODO: add validation and transformation to a number
  createdAt: z.string().optional(), // TODO: add Date type
  updateAt: z.string().optional(), // TODO: add Date type
  category: z.string().optional(),
  sort: z.enum(['asc', 'desc']).optional(),
})

// TODO: get values from URL state when reload window to insert in fields

type FiltersRootFormSchemaInput = z.input<typeof FiltersRootFormSchema>

interface FiltersRootProps {
  children: ReactNode
}

export function FiltersRoot({ children }: FiltersRootProps) {
  const router = useRouter()
  const pathname = usePathname()
  const methods = useForm<FiltersRootFormSchemaInput>({
    resolver: zodResolver(FiltersRootFormSchema),
  })

  const { handleSubmit, reset } = methods

  function handleReset() {
    reset()
    router.push(pathname)
  }

  function handleFilter(data: FiltersRootFormSchemaInput) {
    const formattedSearchParams = removeUndefinedValues(data)
    console.log({ formattedSearchParams })

    console.log(data.name?.length)
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
          <Button variant="outline" onClick={handleReset}>
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
