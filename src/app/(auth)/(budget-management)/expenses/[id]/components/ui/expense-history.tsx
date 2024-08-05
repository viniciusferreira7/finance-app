import { Loader2 } from 'lucide-react'

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

import { ExpenseRow } from './expense-row'
import { SkeletonExpenseHistory } from './skeleton-expense-history'
import { useFetchExpenseHistories } from '../../hooks/queries/use-fetch-expense-histories'

export function ExpenseHistory() {
  const {
    histories,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    isLoading,
  } = useFetchExpenseHistories()

  return (
    <div className="space-y-2.5 px-4 py-4">
      <h4 className="text-xl font-semibold">History of expenses</h4>
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
              <TableHead>Created at</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <SkeletonExpenseHistory />
            ) : (
              <>
                {histories?.map((history, index) => {
                  return <ExpenseRow key={index} {...history} />
                })}
              </>
            )}
          </TableBody>
          {hasNextPage && (
            <TableFooter>
              <TableRow>
                <TableCell colSpan={7}>
                  <Button
                    variant="outline"
                    className="w-full"
                    disabled={isFetchingNextPage}
                    onClick={() => fetchNextPage()}
                  >
                    {isFetchingNextPage ? (
                      <Loader2 className="size-4 animate-spin" />
                    ) : (
                      'Load more'
                    )}
                  </Button>
                </TableCell>
              </TableRow>
            </TableFooter>
          )}
        </Table>
      </div>
    </div>
  )
}
