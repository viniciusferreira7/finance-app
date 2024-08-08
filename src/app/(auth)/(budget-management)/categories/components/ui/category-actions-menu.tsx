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
import { Category } from '@/models/category'

import { AlertDeleteCategory } from './alert-delete-category'
import { DialogUpdateCategoryForm } from './dialog-update-category-form'

interface CategoryActionsMenuProps extends Category {}

export function CategoryActionsMenu(props: CategoryActionsMenuProps) {
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
          Actions to your category
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <DialogUpdateCategoryForm {...props} />
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <AlertDeleteCategory {...props} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
