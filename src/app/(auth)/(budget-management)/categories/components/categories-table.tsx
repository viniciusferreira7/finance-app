'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import { PaginationContainer } from '@/components/pagination-container'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { ErrorRow, NotFoundRow } from '../../components'
import { useFetchCategories } from '../hooks/queries/use-fetch-categories'
import { CategoryBodyRow, SkeletonCategoriesBodyRow } from './ui'

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
              <TableHead className="w-16"></TableHead>
              <TableHead className="w-[180px]">Identifier</TableHead>
              <TableHead className="w-[240px]">Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="w-44">Created at</TableHead>
              <TableHead className="w-44">Updated at</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <SkeletonCategoriesBodyRow />
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
        </Table>
      </div>
      <PaginationContainer {...pagination} />
    </div>
  )
}
