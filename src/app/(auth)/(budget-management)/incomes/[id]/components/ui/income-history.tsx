import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { IncomeRow } from './income-row'

export function IncomeHistory() {
  return (
    <div className="space-y-2.5 px-4 py-4">
      <h4 className="text-xl font-semibold">History of incomes</h4>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Value</TableHead>
              <TableHead className="w-[400px] md:w-[600px] lg:w-[800px] xl:w-[1000px]">
                Description
              </TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Updated at</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10 }).map((_, index) => {
              return <IncomeRow key={index} />
            })}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={7}>
                <Button variant="outline" className="w-full">
                  Load more
                </Button>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
      {/* TODO: Improves the componente */}
      {/* TODO: Creates pagination components */}
      {/* <PaginationContainer currentPage={5} totalPages={100} perPage={10} /> */}
    </div>
  )
}
