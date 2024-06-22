import { Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { CreateExpenseForm, CreateIncomeForm } from '.'

export function Actions() {
  return (
    <div className="flex justify-end gap-2 px-4 py-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <Plus className="size-4" /> Create
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="flex w-64 flex-col ">
          <DropdownMenuLabel className="text-sm font-normal text-muted-foreground">
            Which one do you want to create?
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost">Income</Button>
              </DialogTrigger>
              <CreateIncomeForm />
            </Dialog>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost">Expense</Button>
              </DialogTrigger>
              <CreateExpenseForm />
            </Dialog>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost">Category</Button>
              </DialogTrigger>
              {/* <DialogUpdateIncomeForm /> */}
            </Dialog>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
