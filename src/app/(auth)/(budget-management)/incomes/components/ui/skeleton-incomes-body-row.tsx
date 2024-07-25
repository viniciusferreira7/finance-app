import { ChevronDown, Search } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'

import { LoadingRow } from '../../../components'

export function SkeletonIncomeBodyRow() {
  return (
    <>
      {Array.from({ length: 15 }).map((_, index) => {
        return (
          <TableRow key={index}>
            <TableCell>
              <Button variant="outline" size="xs" disabled>
                <Search className="size-4" />
                <span className="sr-only">Incomes details</span>
              </Button>
            </TableCell>
            {Array.from({ length: 7 }).map((_, index) => {
              return <LoadingRow key={index} />
            })}
            <TableCell>
              <Button
                variant="outline"
                className="flex select-none items-center gap-2"
                disabled
              >
                <ChevronDown />
              </Button>
            </TableCell>
          </TableRow>
        )
      })}
    </>
  )
}
