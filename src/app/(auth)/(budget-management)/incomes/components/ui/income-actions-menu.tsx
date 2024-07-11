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
import { Income } from '@/models/income'

import { AlertDeleteIncome } from './alert-delete-income'
import { DialogUpdateIncomeForm } from './dialog-update-income-form'

interface IncomeActionsMenuProps extends Income {}

export function IncomeActionsMenu(props: IncomeActionsMenuProps) {
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
          Actions to your income
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <DialogUpdateIncomeForm {...props} />
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <AlertDeleteIncome />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
