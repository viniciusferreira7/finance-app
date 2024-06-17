'use client'

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
}

export function PaginationContainer({
  currentPage,
  totalPages,
}: PaginationContainerProps) {
  const pages = generatePages({
    currentPage,
    totalPages,
  })

  return (
    <div className="flex flex-col-reverse gap-4 p-4 md:flex-row md:items-center md:justify-between">
      <div className="flex w-full items-center justify-center gap-2 md:justify-start">
        <p className="text-sm font-bold">Page: {currentPage}</p>
        <p>of</p>
        <p className="text-sm font-bold">{totalPages} pages</p>
      </div>
      <Pagination className="m-0 mx-auto md:justify-end">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href={`?page=${currentPage - 1}`} />
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
                  href={`?page=${page}`}
                  isActive={currentPage === page}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            )
          })}
          <PaginationItem>
            <PaginationNext href={`?page=${currentPage + 1}`} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
