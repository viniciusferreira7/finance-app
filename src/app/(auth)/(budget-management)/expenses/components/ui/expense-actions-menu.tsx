import { ChevronDown } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Expense } from '@/models/expenses'

import { AlertDeleteExpense } from './alert-delete-expense'
import { DialogUpdateExpenseForm } from './dialog-update-expense-form'

interface ExpenseActionsMenuProps extends Expense {}

export function ExpenseActionsMenu(props: ExpenseActionsMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex select-none items-center gap-2"
        >
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="flex w-56 flex-col ">
        <DropdownMenuLabel className="text-sm font-normal text-muted-foreground">
          Actions to your expense
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <DialogUpdateExpenseForm {...props} />
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <AlertDeleteExpense {...props} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
