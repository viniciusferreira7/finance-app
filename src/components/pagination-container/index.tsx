'use client'

import { useRouter } from 'next/navigation'

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

import {
  ELLIPSIS_LEFT,
  ELLIPSIS_RIGHT,
  generatePages,
} from './utils/generate-pages'

interface PaginationContainerProps {
  currentPage: number
  totalPages: number
  perPage: number
  count: number
}

export function PaginationContainer({
  currentPage,
  totalPages,
  perPage,
  count,
}: PaginationContainerProps) {
  const router = useRouter()

  const pages = generatePages({
    currentPage,
    totalPages,
  })

  function handleChangePage(page: number) {
    const queries = window.location.search

    if (queries.includes('page=')) {
      router.replace(
        window.location.search.replace(/page=\d+/g, `page=${page}`),
      )
    } else {
      router.replace(`?page=${page}`)
    }
  }

  const hasPreviousPage = currentPage > 1
  const hasNextPage = currentPage < totalPages

  function getItemsOnCurrentPage() {
    if (currentPage < totalPages) {
      return perPage
    } else {
      return count % perPage || perPage
    }
  }

  const showing = ((currentPage ?? 1) - 1) * perPage + getItemsOnCurrentPage()

  return (
    <div className="flex flex-col-reverse gap-4 p-4 md:flex-row md:items-center md:justify-between">
      <div className="flex w-full items-center justify-center gap-2 md:justify-start">
        <p className="text-sm font-bold">Showing: {showing}</p>
        <p>of</p>
        <p className="text-sm font-bold">{count} records</p>
      </div>
      <Pagination className="m-0 mx-auto md:justify-end">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              disabled={!hasPreviousPage}
              onClick={() => handleChangePage(currentPage - 1)}
              className="data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-30"
            />
          </PaginationItem>
          {pages.map((page) => {
            const isEllipsis = page === ELLIPSIS_LEFT || page === ELLIPSIS_RIGHT
            if (isEllipsis) {
              return (
                <PaginationItem key={page} className="hidden md:block">
                  <PaginationEllipsis />
                </PaginationItem>
              )
            }

            return (
              <PaginationItem key={page}>
                <PaginationLink
                  onClick={() => handleChangePage(page)}
                  isActive={currentPage === page}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            )
          })}
          <PaginationItem>
            <PaginationNext
              disabled={!hasNextPage}
              onClick={() => handleChangePage(currentPage + 1)}
              className="data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-30"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
