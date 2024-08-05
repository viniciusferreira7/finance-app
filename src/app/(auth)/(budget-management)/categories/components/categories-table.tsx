'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import { PaginationContainer } from '@/components/pagination-container'
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

import { ErrorRow, NotFoundRow } from '../../components'
import { useFetchCategories } from '../hooks/queries/use-fetch-categories'
import { CategoryBodyRow, SkeletonCategoryBodyRow } from './ui'

export function CategoriesTable() {
  const searchParams = useSearchParams()

  const {
    data: categories,
    isLoading,
    isError,
    params,
    refetch,
    setParams,
  } = useFetchCategories()

  const totalCategory = categories?.results.reduce<number>(
    (acc, category) => acc + category.description / 100,
    0,
  )

  const pagination = {
    currentPage: categories?.page ?? 0,
    totalPages: categories?.total_pages ?? 1,
    perPage: categories?.per_page ?? 10,
    count: categories?.count ?? 0,
  }

  let page = Number(searchParams.get('page') ?? 1)

  if (categories?.total_pages && page > categories?.total_pages) {
    page = categories?.total_pages
  }

  const name = searchParams.get('name')
  const description = searchParams.get('description')
  const createdAtFrom = searchParams.get('createdAtFrom')
  const createdAtTo = searchParams.get('createdAtTo')
  const updatedAtFrom = searchParams.get('updatedAtFrom')
  const updatedAtTo = searchParams.get('updatedAtTo')
  const category = searchParams.get('category')
  const sort = searchParams.get('sort')

  useEffect(() => {
    setParams({
      ...params,
      searchParams: {
        ...params.searchParams,
        page,
        name,
        description,
        createdAt: {
          from: createdAtFrom,
          to: createdAtTo,
        },
        updatedAt: {
          from: updatedAtFrom,
          to: updatedAtTo,
        },
        category_id: category,
        sort,
      },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    page,
    name,
    description,
    createdAtFrom,
    createdAtTo,
    updatedAtFrom,
    updatedAtTo,
    category,
    sort,
  ])

  return (
    <div className="space-y-2.5">
      <div className="rounded-md border">
        <Table containerClassName="static">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[64px]"></TableHead>
              <TableHead className="w-[180px]">Identifier</TableHead>
              <TableHead className="w-[140px]">Name</TableHead>
              <TableHead className="max-w-[180px]">description</TableHead>
              <TableHead className="w-[380px]">Description</TableHead>
              <TableHead className="w-[180px]">Category</TableHead>
              <TableHead>Created at</TableHead>
              <TableHead>Update at</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <SkeletonCategoryBodyRow />
            ) : (
              <>
                {categories?.results.length ? (
                  categories?.results.map((category) => {
                    return <CategoryBodyRow key={category.id} {...category} />
                  })
                ) : (
                  <>
                    {!!categories && !categories.results.length && (
                      <NotFoundRow />
                    )}
                  </>
                )}
              </>
            )}

            {isError && <ErrorRow onRefetch={refetch} />}
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
                  formatCurrency(totalCategory, {
                    isToConvertToCurrency: false,
                  })
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
