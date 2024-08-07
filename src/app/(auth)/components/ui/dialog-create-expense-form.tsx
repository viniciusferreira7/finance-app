'use client'

import { useAutoAnimate } from '@formkit/auto-animate/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

import { AlertDialogHeader } from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import * as Input from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

import { useCreateExpense } from '../../hooks/mutations'
import { InputValue, SelectCategory } from '.'

const DialogCreateExpenseFormSchema = z.object({
  name: z
    .string()
    .min(1, 'Mut be at least 1 character')
    .max(40, 'Must be 40 characters.'),
  value: z
    .string()
    .min(1, 'Must enter the value')
    .refine((value) => (value ? Number(value) : true), {
      message: 'Must be a number',
    })
    .refine((value) => (value ? Number(value) >= 0 : true), {
      message: 'Must be a positive number',
    })
    .transform((value) => value?.match(/\d+/g)),
  category: z.string({ required_error: 'Must select a category' }),
  description: z.string().max(220, 'Must be 220 characters.').optional(),
})

type DialogCreateExpenseFormSchema = z.input<
  typeof DialogCreateExpenseFormSchema
>

export function DialogCreateExpenseForm() {
  const [parent] = useAutoAnimate()
  const [open, setOpen] = useState(false)

  const methods = useForm<DialogCreateExpenseFormSchema>({
    resolver: zodResolver(DialogCreateExpenseFormSchema),
  })

  const { mutate, isPending } = useCreateExpense()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods

  function handleCreateExpense(data: DialogCreateExpenseFormSchema) {
    mutate({
      name: data.name,
      value: Number(data.value),
      description: data.description,
      category_id: data.category,
    })
  }

  return (
    <FormProvider {...methods}>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="ghost">Expense</Button>
        </DialogTrigger>
        <DialogContent>
          <AlertDialogHeader>
            <DialogTitle>Create your expense</DialogTitle>
            <DialogDescription>
              This form creates a record of expenses. Please provide accurate
              and complete information to ensure correct documentation of your
              expenses.
            </DialogDescription>
          </AlertDialogHeader>
          <form
            ref={parent}
            onSubmit={handleSubmit(handleCreateExpense)}
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
            <Button
              type="submit"
              className="w-full"
              variant="destructive"
              disabled={isPending}
            >
              Create
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </FormProvider>
  )
}
