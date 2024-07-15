import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { IncomeRow } from './income-row'

export function IncomeHistory() {
  return (
    <div className="space-y-2.5">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Identifier</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Value</TableHead>
              <TableHead className="w-[280px]">Description</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Update at</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10 }).map((_, index) => {
              return <IncomeRow key={index} />
            })}
          </TableBody>
        </Table>
      </div>
      {/* TODO: Improves the componente */}
      {/* TODO: Creates pagination components */}
      {/* <PaginationContainer currentPage={5} totalPages={100} perPage={10} /> */}
    </div>
  )
}
