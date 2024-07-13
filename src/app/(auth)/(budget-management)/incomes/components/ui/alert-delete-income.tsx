'use client'

import { X } from 'lucide-react'

import { useDeleteIncome } from '@/app/(auth)/hooks/mutations'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Income } from '@/models/income'

interface AlertDeleteIncomeProps extends Income {}

export function AlertDeleteIncome(props: AlertDeleteIncomeProps) {
  const { mutate, isPending } = useDeleteIncome()

  function handleDeleteIncome() {
    mutate({
      params: {
        id: props.id,
      },
    })
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          size="xs"
          className="cursor-pointer text-rose-500 duration-500 hover:bg-rose-500/10 dark:text-rose-400 dark:hover:bg-rose-400/10"
        >
          <X className="size-3" />
          Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle asChild>
            <h1>Are you absolutely sure?</h1>
          </AlertDialogTitle>
          <AlertDialogTitle asChild className="text-sm font-medium">
            <h1>Delete: {props.name}</h1>
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            income and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-rose-500 hover:bg-rose-800"
            disabled={isPending}
            onClick={handleDeleteIncome}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
