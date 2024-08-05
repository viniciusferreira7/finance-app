'use client'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { formatCurrency } from '@/utils/currency/format-currency'

import { useGetIncome } from '../hooks/queries/use-get-income'
import { IncomeHistory, SkeletonIncomeDetails } from './ui'

dayjs.extend(relativeTime)

export function IncomeDetails() {
  const { data: income, isLoading } = useGetIncome()

  if (isLoading) {
    return <SkeletonIncomeDetails />
  }

  return (
    <div>
      <div className="flex flex-col space-y-1.5 text-center sm:text-left">
        <h2 className="mb-4 text-lg font-semibold leading-none tracking-tight">
          Income details
        </h2>
      </div>
      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Name</TableCell>
              <TableCell className="flex justify-end">{income?.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Category</TableCell>
              <TableCell className="flex justify-end">
                {income?.category?.name}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Value</TableCell>
              <TableCell className="flex justify-end">
                {formatCurrency(income?.value)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">
                Created at
              </TableCell>
              <TableCell className="flex justify-end">
                {dayjs(income?.created_at).format('MM/DD/YYYY [ - ] HH:MM')}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">
                Updated at
              </TableCell>
              <TableCell className="flex justify-end">
                {dayjs().from(income?.updated_at)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <div className="space-y-2 p-2">
          <p className="text-sm text-muted-foreground">Description</p>
          <p className="line-clamp-6 text-sm">
            {income?.description || 'No information'}
          </p>
        </div>
        <IncomeHistory />
      </div>
    </div>
  )
}
