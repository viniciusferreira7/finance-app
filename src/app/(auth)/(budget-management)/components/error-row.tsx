import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'

interface ErrorRowProps {
  onRefetch: () => void
}

export function ErrorRow({ onRefetch }: ErrorRowProps) {
  return (
    <TableRow>
      <TableCell
        colSpan={9}
        className="space-y-2 py-4 text-center text-lg font-medium"
      >
        <p>There was a problem with the server </p>
        <Button variant="outline" onClick={() => onRefetch()}>
          Please try again
        </Button>
      </TableCell>
    </TableRow>
  )
}
