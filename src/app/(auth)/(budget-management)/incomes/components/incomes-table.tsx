'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import { PaginationContainer } from '@/components/pagination-container'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { formatCurrency } from '@/utils/format-currency'

import { useFetchIncomes } from '../hooks/queries/use-fetch-incomes'
import { IncomesBodyRow } from './ui'

export function IncomesTable() {
  const searchParams = useSearchParams()

  const { data: incomes, params, setParams } = useFetchIncomes()

  const totalIncome = incomes?.results.reduce<number>(
    (acc, income) => acc + income.value,
    0,
  )

  const pagination = {
    currentPage: incomes?.page ?? 1,
    totalPages: incomes?.total_pages ?? 1,
    perPage: incomes?.per_page ?? 10,
    count: incomes?.count ?? 1,
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

  return (
    <div className="space-y-2.5">
      <div className="rounded-md border">
        <Table containerClassName="static">
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
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {incomes?.results.map((income) => {
              return <IncomesBodyRow key={income.id} {...income} />
            })}
          </TableBody>
          <TableFooter>
            <TableRow className="p-4">
              <TableCell className="p-4">Total</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell className="p-4 pl-2 font-medium">
                {formatCurrency(totalIncome)}
              </TableCell>
              <TableCell colSpan={7}></TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
      <PaginationContainer {...pagination} />
    </div>
  )
}
