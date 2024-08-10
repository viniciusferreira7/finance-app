import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Search } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'
import { cn } from '@/lib/utils'
import { Category } from '@/models/category'

import { CategoryActionsMenu } from '../../../categories/components/ui'

dayjs.extend(relativeTime)

interface CategoryBodyRowProps extends Category {}

export function CategoryBodyRow(props: CategoryBodyRowProps) {
  return (
    <TableRow>
      <TableCell>
        <Button variant="outline" size="xs" asChild>
          <Link href={`/categories/${props.id}`}>
            <Search className="size-4" />
            <span className="sr-only">Categories details</span>
          </Link>
        </Button>
      </TableCell>
      <TableCell className="font-mono text-sm font-medium">
        {props.id}
      </TableCell>
      <TableCell className="truncate text-muted-foreground">
        {props.name}
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
      <TableCell>
        {dayjs(props.created_at).format('MM/DD/YYYY [ - ] HH:MM')}
      </TableCell>
      <TableCell>{dayjs().from(props.updated_at)}</TableCell>
      {/* //FIXME: Verificar porque o updated não está funcionando atualizando */}
      <TableCell>
        <CategoryActionsMenu {...props} />
      </TableCell>
    </TableRow>
  )
}
