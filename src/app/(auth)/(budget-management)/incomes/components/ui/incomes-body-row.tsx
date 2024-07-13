import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Search } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'
import { cn } from '@/lib/utils'
import { Income } from '@/models/income'
import { formatCurrency } from '@/utils/currency/format-currency'

import { IncomeActionsMenu } from './income-actions-menu'

dayjs.extend(relativeTime)

interface IncomesBodyRowProps extends Income {}

export function IncomesBodyRow(props: IncomesBodyRowProps) {
  return (
    <TableRow>
      <TableCell>
        <Button variant="outline" size="xs" asChild>
          <Link href="/incomes/job">
            <Search className="size-4" />
            <span className="sr-only">Incomes details</span>
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
        <IncomeActionsMenu {...props} />
      </TableCell>
    </TableRow>
  )
}
