'use client'

import { useAutoAnimate } from '@formkit/auto-animate/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

import { AlertDialogHeader } from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog'
import * as Input from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const createIncomeFormSchema = z.object({
  name: z
    .string()
    .min(1, 'Mut be at least 1 character')
    .max(40, 'Must be 40 characters.'),
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
  description: z.string().max(220, 'Must be 220 characters.').optional(),
})

type CreateIncomeFormSchema = z.input<typeof createIncomeFormSchema>

export function CreateIncomeForm() {
  const [parent] = useAutoAnimate()
  const methods = useForm<CreateIncomeFormSchema>({
    resolver: zodResolver(createIncomeFormSchema),
  })

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods

  function handleCreateIncome(data: CreateIncomeFormSchema) {
    console.log(data)
  }

  return (
    <FormProvider {...methods}>
      <DialogContent>
        <AlertDialogHeader>
          <DialogTitle>Create your income</DialogTitle>
          <DialogDescription>
            This form will create a record of income. Please provide accurate
            and complete information to ensure proper documentation of your
            earnings.
          </DialogDescription>
        </AlertDialogHeader>
        <form
          ref={parent}
          onSubmit={handleSubmit(handleCreateIncome)}
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
            <div ref={parent} className="space-y-2">
              <Label htmlFor="value" isError={!!errors.value}>
                Value
              </Label>
              <Input.Root isError={!!errors.value}>
                <Input.Control id="value" {...register('value')} />
              </Input.Root>
              {!!errors.value && (
                <Input.HelperText isError={!!errors.value}>
                  {errors.value.message}
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
          <Button type="submit" className="w-full">
            Create
          </Button>
        </form>
      </DialogContent>
    </FormProvider>
  )
}