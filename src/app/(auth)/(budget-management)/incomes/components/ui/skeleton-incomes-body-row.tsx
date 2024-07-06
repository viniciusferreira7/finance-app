import { ChevronDown, Search } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { TableCell, TableRow } from '@/components/ui/table'

export function SkeletonIncomesBodyRow() {
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
            <TableCell className="font-mono text-sm font-medium">
              <Skeleton className="h-5 w-40" />
            </TableCell>
            <TableCell className="truncate text-muted-foreground">
              <Skeleton className="h-5 w-40" />
            </TableCell>
            <TableCell className="truncate font-medium text-muted-foreground">
              <Skeleton className="h-5 w-44" />
            </TableCell>
            <TableCell className="max-w-2 truncate font-medium">
              <Skeleton className="h-5 w-80" />
            </TableCell>
            <TableCell className="truncate font-medium">
              <Skeleton className="h-5 w-40" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-5 w-40" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-5 w-40" />
            </TableCell>
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
