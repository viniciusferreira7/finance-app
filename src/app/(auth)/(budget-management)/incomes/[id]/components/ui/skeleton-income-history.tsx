import { LoadingRow } from '@/app/(auth)/(budget-management)/components'
import { TableRow } from '@/components/ui/table'

export function SkeletonIncomeHistory() {
  return Array.from({ length: 8 }).map((_, index) => {
    return (
      <TableRow key={index}>
        {Array.from({ length: 5 }).map((_, index) => (
          <LoadingRow key={index} />
        ))}
      </TableRow>
    )
  })
}
