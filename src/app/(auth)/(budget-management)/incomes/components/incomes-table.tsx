'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import { PaginationContainer } from '@/components/pagination-container'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { formatCurrency } from '@/utils/currency/format-currency'

import { useFetchIncomes } from '../hooks/queries/use-fetch-incomes'
import { IncomesBodyRow, SkeletonIncomesBodyRow } from './ui'

export function IncomesTable() {
  const searchParams = useSearchParams()

  const {
    data: incomes,
    isLoading,
    isError,
    params,
    refetch,
    setParams,
  } = useFetchIncomes()

  const totalIncome = incomes?.results.reduce<number>(
    (acc, income) => acc + income.value / 100,
    0,
  )

  const pagination = {
    currentPage: incomes?.page ?? 0,
    totalPages: incomes?.total_pages ?? 1,
    perPage: incomes?.per_page ?? 10,
    count: incomes?.count ?? 0,
  }

  let page = Number(searchParams.get('page') ?? 1)

  if (incomes?.total_pages && page > incomes?.total_pages) {
    page = incomes?.total_pages
  }

  useEffect(() => {
    setParams({
      searchParams: { ...params.searchParams, page },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  console.log(params.searchParams)

  return (
    <div className="space-y-2.5">
      <div className="rounded-md border">
        <Table containerClassName="static">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[64px]"></TableHead>
              <TableHead className="w-[180px]">Identifier</TableHead>
              <TableHead className="w-[140px]">Name</TableHead>
              <TableHead className="max-w-[180px]">Value</TableHead>
              <TableHead className="w-[280px]">Description</TableHead>
              <TableHead className="w-[180px]">Category</TableHead>
              <TableHead>Created at</TableHead>
              <TableHead>Update at</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <SkeletonIncomesBodyRow />
            ) : (
              <>
                {incomes?.results.length ? (
                  incomes?.results.map((income) => {
                    return <IncomesBodyRow key={income.id} {...income} />
                  })
                ) : (
                  <>
                    {!!incomes && !incomes.results.length && (
                      <TableRow>
                        <TableCell
                          colSpan={9}
                          className="py-4 text-center text-lg font-medium"
                        >
                          No results found.
                        </TableCell>
                      </TableRow>
                    )}
                  </>
                )}
              </>
            )}

            {isError && (
              <TableRow>
                <TableCell
                  colSpan={9}
                  className="space-y-2 py-4 text-center text-lg font-medium"
                >
                  <p>There was a problem with the server </p>
                  <Button variant="outline" onClick={() => refetch()}>
                    Please try again
                  </Button>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow className="p-4">
              <TableCell className="p-4" colSpan={3}>
                Total per page
              </TableCell>
              <TableCell colSpan={6} className="p-4 pl-2 font-medium">
                {isLoading ? (
                  <Skeleton className="h-5 w-40" />
                ) : (
                  formatCurrency(totalIncome, { isToConvertToCurrency: false })
                )}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
      <PaginationContainer {...pagination} />
    </div>
  )
}
