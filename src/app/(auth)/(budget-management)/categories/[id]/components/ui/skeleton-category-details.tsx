'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'

export function SkeletonCategoryDetails() {
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
                <Skeleton className="h-4 w-80" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Category</TableCell>
              <TableCell className="flex justify-end">
                <Skeleton className="h-4 w-60" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Value</TableCell>
              <TableCell className="flex justify-end">
                <Skeleton className="h-4 w-44" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">
                Created at
              </TableCell>
              <TableCell className="flex justify-end">
                <Skeleton className="h-4 w-32" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">
                Updated at
              </TableCell>
              <TableCell className="flex justify-end">
                <Skeleton className="h-4 w-36" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <div className="space-y-2 p-2">
          <p className="text-sm text-muted-foreground">Description</p>
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-1/4" />
          </div>
        </div>
      </div>
    </div>
  )
}
