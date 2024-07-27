import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Search } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'
import { cn } from '@/lib/utils'
import { Expense } from '@/models/expenses'
import { formatCurrency } from '@/utils/currency/format-currency'

import { ExpenseActionsMenu } from './expense-actions-menu'

dayjs.extend(relativeTime)

interface ExpenseBodyRowProps extends Expense {}

export function ExpenseBodyRow(props: ExpenseBodyRowProps) {
  return (
    <TableRow>
      <TableCell>
        <Button variant="outline" size="xs" asChild>
          <Link href="/expenses/job">
            <Search className="size-4" />
            <span className="sr-only">Expenses details</span>
          </Link>
        </Button>
      </TableCell>
      <TableCell className="font-mono text-sm font-medium">
        {props.id}
      </TableCell>
      <TableCell className="truncate text-muted-foreground">
        {props.name}
      </TableCell>
      <TableCell className="truncate font-medium text-muted-foreground">
        {formatCurrency(props.value)}
      </TableCell>
      <TableCell
        className={cn(
          'max-w-2 truncate font-medium',
          !props.description &&
            'text-muted-foreground decoration-muted-foreground/80',
        )}
      >
        {props.description ?? '---'}
      </TableCell>
      <TableCell
        className={cn(
          'truncate font-medium',
          !props.category?.name &&
            'text-muted-foreground decoration-muted-foreground/80',
        )}
      >
        {props.category?.name ?? '---'}
      </TableCell>
      <TableCell>
        {dayjs(props.created_at).format('MM/DD/YYYY [ - ] HH:MM:ss')}
      </TableCell>
      <TableCell>{dayjs().from(props.updated_at)}</TableCell>
      <TableCell>
        <ExpenseActionsMenu {...props} />
      </TableCell>
    </TableRow>
  )
}
