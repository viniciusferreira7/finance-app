'use client'

import { useParams } from 'next/navigation'

import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'

import { IncomeHistory } from './ui/income-history'

export function IncomeDetails() {
  const { id: incomeId } = useParams<{ id: string }>()

  return (
    <div>
      <div className="flex flex-col space-y-1.5 text-center sm:text-left">
        <h2 className="text-lg font-semibold leading-none tracking-tight">
          Income: Job
        </h2>
        <h3 className="text-sm text-muted-foreground">Income details</h3>
      </div>
      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Name</TableCell>
              <TableCell className="flex justify-end">Salary</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Category</TableCell>
              <TableCell className="flex justify-end">Job</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Value</TableCell>
              <TableCell className="flex justify-end">R$ 3500,00 </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">
                Updated at
              </TableCell>
              <TableCell className="flex justify-end">20/03/2024</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">
                Created at
              </TableCell>
              <TableCell className="flex justify-end">20/03/2024</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <div className="space-y-2 p-2">
          <p className="text-sm text-muted-foreground">Description</p>
          <p className="line-clamp-6 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            quia blanditiis accusantium saepe debitis illum ab doloribus libero
            quae deserunt. Delectus ipsa accusantium ullam maxime rem voluptate
            at autem ipsum! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Excepturi quia blanditiis accusantium saepe debitis illum ab
            doloribus libero quae deserunt. Delectus ipsa accusantium ullam
            maxime rem voluptate at autem ipsum! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Excepturi quia blanditiis accusantium
            saepe debitis illum ab doloribus libero quae deserunt. Delectus ipsa
            accusantium ullam maxime rem voluptate at autem ipsum!
          </p>
        </div>
        <IncomeHistory />
      </div>
    </div>
  )
}
