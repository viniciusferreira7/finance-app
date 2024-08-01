import { TableCell, TableRow } from '@/components/ui/table'

export function ExpenseRow() {
  return (
    <TableRow>
      <TableCell className="text-muted-foreground">Payment</TableCell>
      <TableCell className="font-medium text-muted-foreground">
        R$ 5000,00
      </TableCell>
      <TableCell className="max-w-[280px] truncate font-medium">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        aperiam exercitationem deleniti delectus blanditiis excepturi asperiores
        alias explicabo assumenda facere ad rerum dicta, modi fugiat ipsam ex
        enim? Numquam, totam.
      </TableCell>
      <TableCell className="font-medium">Job</TableCell>
      <TableCell>07/06/2024</TableCell>
    </TableRow>
  )
}
