import { TableCell, TableRow } from '@/components/ui/table'

export function NotFoundRow() {
  return (
    <TableRow>
      <TableCell colSpan={9} className="py-4 text-center text-lg font-medium">
        No results found.
      </TableCell>
    </TableRow>
  )
}
