import dayjs from 'dayjs'

import { TableCell, TableRow } from '@/components/ui/table'
import { Income } from '@/models/income'
import { formatCurrency } from '@/utils/currency/format-currency'

interface IncomeRowProps extends Omit<Income, 'updated_at'> {}

export function IncomeRow(props: IncomeRowProps) {
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
        {dayjs(props.created_at).format('YYYY-MM-DD [ - ] HH:MM')}
      </TableCell>
    </TableRow>
  )
}
