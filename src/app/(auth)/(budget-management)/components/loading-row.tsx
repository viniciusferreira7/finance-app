import { Skeleton } from '@/components/ui/skeleton'
import { TableCell } from '@/components/ui/table'

export function LoadingRow() {
  return (
    <TableCell className="font-mono text-sm font-medium">
      <Skeleton className="h-5 w-40" />
    </TableCell>
  )
}
