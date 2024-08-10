'use client'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'

import { useGetCategory } from '../hooks/queries/use-get-category'
import { SkeletonCategoryDetails } from './ui'

dayjs.extend(relativeTime)

export function CategoryDetails() {
  const { data: category, isLoading } = useGetCategory()

  if (isLoading) {
    return <SkeletonCategoryDetails />
  }

  return (
    <div>
      <div className="flex flex-col space-y-1.5 text-center sm:text-left">
        <h2 className="mb-4 text-lg font-semibold leading-none tracking-tight">
          Category details
        </h2>
      </div>
      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Name</TableCell>
              <TableCell className="flex justify-end">
                {category?.name}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">
                Created at
              </TableCell>
              <TableCell className="flex justify-end">
                {dayjs(category?.created_at).format('MM/DD/YYYY [ - ] HH:MM')}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">
                Updated at
              </TableCell>
              <TableCell className="flex justify-end">
                {dayjs().from(category?.updated_at)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <div className="space-y-2 p-2">
          <p className="text-sm text-muted-foreground">Description</p>
          <p className="line-clamp-6 text-sm">
            {category?.description || 'No information'}
          </p>
        </div>
      </div>
    </div>
  )
}
