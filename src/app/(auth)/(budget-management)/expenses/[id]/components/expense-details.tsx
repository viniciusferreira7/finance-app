'use client'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { formatCurrency } from '@/utils/currency/format-currency'

import { useGetExpense } from '../hooks/queries/use-get-expense'
import { ExpenseHistory, SkeletonExpenseDetails } from './ui'

dayjs.extend(relativeTime)

export function ExpenseDetails() {
  const { data: expense, isLoading } = useGetExpense()

  if (isLoading) {
    return <SkeletonExpenseDetails />
  }

  return (
    <div>
      <div className="flex flex-col space-y-1.5 text-center sm:text-left">
        <h2 className="mb-4 text-lg font-semibold leading-none tracking-tight">
          Expense details
        </h2>
      </div>
      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Name</TableCell>
              <TableCell className="flex justify-end">
                {expense?.name}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Category</TableCell>
              <TableCell className="flex justify-end">
                {expense?.category?.name}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Value</TableCell>
              <TableCell className="flex justify-end">
                {formatCurrency(expense?.value)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">
                Created at
              </TableCell>
              <TableCell className="flex justify-end">
                {dayjs(expense?.created_at).format('MM/DD/YYYY [ - ] HH:MM:ss')}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">
                Updated at
              </TableCell>
              <TableCell className="flex justify-end">
                {dayjs().from(expense?.updated_at)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <div className="space-y-2 p-2">
          <p className="text-sm text-muted-foreground">Description</p>
          <p className="line-clamp-6 text-sm">
            {expense?.description || 'No information'}
          </p>
        </div>
        <ExpenseHistory />
      </div>
    </div>
  )
}
