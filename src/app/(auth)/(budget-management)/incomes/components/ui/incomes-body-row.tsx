import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'

import { IncomeDetails } from './income-details'

export function IncomesBodyRow() {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="size-4" />
              <span className="sr-only">Incomes details</span>
            </Button>
          </DialogTrigger>
          <IncomeDetails />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-sm font-medium">
        lnkjBJKsd424dfsdc1
      </TableCell>
      <TableCell className="text-muted-foreground">Payment</TableCell>
      <TableCell className="font-medium text-muted-foreground">
        R$ 5000,00
      </TableCell>
      <TableCell className="max-w-2 truncate font-medium">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        aperiam exercitationem deleniti delectus blanditiis excepturi asperiores
        alias explicabo assumenda facere ad rerum dicta, modi fugiat ipsam ex
        enim? Numquam, totam.
      </TableCell>
      <TableCell className="font-medium">Job</TableCell>
      <TableCell>20/03/2024</TableCell>
      <TableCell>20/04/2024</TableCell>
      <TableCell>
        <Button variant="outline" size="xs">
          <ArrowRight className="size-3" />
          Update
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="xs">
          <X className="size-3" />
          Cancel
        </Button>
      </TableCell>
    </TableRow>
  )
}
