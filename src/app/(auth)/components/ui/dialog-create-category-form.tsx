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

import { useCreateCategory } from '../../hooks/mutations'

const dialogCreateCategoryFormSchema = z.object({
  name: z
    .string()
    .min(1, 'Mut be at least 1 character')
    .max(40, 'Must be 40 characters.'),
  description: z.string().max(220, 'Must be 220 characters.').optional(),
})

type DialogCreateCategoryFormSchema = z.input<
  typeof dialogCreateCategoryFormSchema
>

export function DialogCreateCategoryForm() {
  const [parent] = useAutoAnimate()
  const methods = useForm<DialogCreateCategoryFormSchema>({
    resolver: zodResolver(dialogCreateCategoryFormSchema),
  })

  const { mutate, isPending } = useCreateCategory()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods

  function handleDialogCreateCategory(data: DialogCreateCategoryFormSchema) {
    mutate({
      name: data.name,
      description: data.description,
    })
  }

  return (
    <FormProvider {...methods}>
      <DialogContent>
        <AlertDialogHeader>
          <DialogTitle>Create your Category</DialogTitle>
          <DialogDescription>
            This form creates a record of category. Please provide accurate and
            complete information to ensure correct documentation of your
            categories.
          </DialogDescription>
        </AlertDialogHeader>
        <form
          ref={parent}
          onSubmit={handleSubmit(handleDialogCreateCategory)}
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
            variant="secondary"
            disabled={isPending}
          >
            Create
          </Button>
        </form>
      </DialogContent>
    </FormProvider>
  )
}
