'use client'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Dialog } from '@radix-ui/react-dialog'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

import { InputValue, SelectCategory } from '@/app/(auth)/components/ui'
import { useUpdateIncome } from '@/app/(auth)/hooks/mutations'
import { Button } from '@/components/ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import * as Input from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Income } from '@/models/income'
import { convertToCurrency } from '@/utils/currency/convert-to-currency'
import { formatCurrency } from '@/utils/currency/format-currency'

const updateFormSchema = z.object({
  name: z
    .string()
    .min(1, 'Mut be at least 1 character')
    .max(40, 'Must be 40 characters.')
    .optional(),
  value: z
    .string()
    .min(1, 'Must enter the value')
    .refine((value) => (value ? Number(value) : true), {
      message: 'Must be a number',
    })
    .refine((value) => (value ? Number(value) >= 0 : true), {
      message: 'Must be a positive number',
    })
    .transform((value) => value?.match(/\d+/g))
    .optional(),
  category: z.string({ required_error: 'Must select a category' }).optional(),
  description: z.string().max(220, 'Must be 220 characters.').optional(),
})

type UpdateFormSchemaInput = z.input<typeof updateFormSchema>

interface DialogUpdateIncomeFormProps extends Income {}

export function DialogUpdateIncomeForm(props: DialogUpdateIncomeFormProps) {
  const [parent] = useAutoAnimate()
  const [open, setOpen] = useState(false)
  const methods = useForm<UpdateFormSchemaInput>({
    resolver: zodResolver(updateFormSchema),
    defaultValues: {
      name: props.name,
      value: props.value
        ? convertToCurrency(props.value).toString()
        : undefined,
      category: props.category_id,
      description: props.description,
    },
  })

  const { mutate, isPending } = useUpdateIncome()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods

  console.log({ table: formatCurrency(props.value), input: props.value })

  function handleUpdateIncome(data: UpdateFormSchemaInput) {
    mutate(
      {
        params: {
          id: props.id,
        },
        payload: {
          name: data.name,
          value: data.value ? Number(data.value) : undefined,
          description: data.description,
          category_id: data.category,
        },
      },
      {
        onSuccess: () => {
          setOpen(false)
        },
      },
    )
  }

  return (
    <FormProvider {...methods}>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="ghost" size="xs">
            <ArrowRight className="size-3" />
            Update
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently update your
              record and overwrite your existing data on our servers. The
              previous data will be retained in the resource history.
            </DialogDescription>
          </DialogHeader>
          <form
            ref={parent}
            onSubmit={handleSubmit(handleUpdateIncome)}
            className="space-y-5"
          >
            <div className="space-y-4">
              <div ref={parent} className="space-y-2">
                <Label htmlFor="name" isError={!!errors.name}>
                  Name
                </Label>
                <Input.Root isError={!!errors.name}>
                  <Input.Control id="name" {...register('name')} />
                </Input.Root>
                {!!errors.name && (
                  <Input.HelperText isError={!!errors.name}>
                    {errors.name.message}
                  </Input.HelperText>
                )}
              </div>
              <InputValue />
              <div ref={parent} className="space-y-2">
                <Label htmlFor="category" isError={!!errors.category}>
                  Select a category
                </Label>
                <SelectCategory />
                {!!errors.category && (
                  <Input.HelperText isError={!!errors.category}>
                    {errors.category.message}
                  </Input.HelperText>
                )}
              </div>
              <div ref={parent} className="space-y-2">
                <Label htmlFor="description" isError={!!errors.description}>
                  Description
                </Label>
                <Textarea
                  isError={!!errors.description}
                  className="max-h-28 resize-none"
                  {...register('description')}
                />
                {!!errors.description && (
                  <Input.HelperText isError={!!errors.description}>
                    {errors.description.message}
                  </Input.HelperText>
                )}
              </div>
            </div>
            <Button type="submit" className="w-full" disabled={isPending}>
              Update
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </FormProvider>
  )
}
