import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { IncomesBodyRow } from './ui'

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
          <TableFooter>
            <TableRow className="p-4">
              <TableCell className="p-4">Total</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell className="p-4 pl-2 font-medium">R$ 7500,60</TableCell>
              <TableCell colSpan={7}></TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
      {/* <Pagination pageIndex={0} totalCount={100} perPage={10} /> */}
    </div>
  )
}
