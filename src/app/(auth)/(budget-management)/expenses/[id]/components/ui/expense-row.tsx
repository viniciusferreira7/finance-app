import dayjs from 'dayjs'

import { TableCell, TableRow } from '@/components/ui/table'
import { Expense } from '@/models/expenses'
import { formatCurrency } from '@/utils/currency/format-currency'

interface ExpenseRowProps extends Omit<Expense, 'updated_at'> {}

export function ExpenseRow(props: ExpenseRowProps) {
  return (
    <TableRow>
      <TableCell className="text-muted-foreground">{props.name}</TableCell>
      <TableCell className="font-medium text-muted-foreground">
        {formatCurrency(props.value)}
      </TableCell>
      <TableCell className="max-w-[280px] truncate font-medium">
        {props.description}
      </TableCell>
      <TableCell className="font-medium">{props.category.name}</TableCell>
      <TableCell>
        {dayjs(props.created_at).format('YYYY-MM-DD [ - ] HH:mm:ss')}
      </TableCell>
    </TableRow>
  )
}
