import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { IncomesBodyRow } from './ui/incomes-body-row'

export function IncomesTable() {
  return (
    <div className="space-y-2.5">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[64px]"></TableHead>
              <TableHead className="w-[180px]">Identifier</TableHead>
              <TableHead className="w-[140px]">Name</TableHead>
              <TableHead className="w-[180px]">Value</TableHead>
              <TableHead className="w-[280px]">Description</TableHead>
              <TableHead className="w-[180px]">Category</TableHead>
              <TableHead>Created at</TableHead>
              <TableHead>Update at</TableHead>
              <TableHead></TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10 }).map((_, index) => {
              return <IncomesBodyRow key={index} />
            })}
          </TableBody>
        </Table>
      </div>
      {/* <Pagination pageIndex={0} totalCount={100} perPage={10} /> */}
    </div>
  )
}
