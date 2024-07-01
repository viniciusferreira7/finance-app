export const ELLIPSIS_LEFT = -10
export const ELLIPSIS_RIGHT = -20

interface GeneratePagesParams {
  currentPage: number
  totalPages: number
}

export function generatePages({
  currentPage,
  totalPages,
}: GeneratePagesParams) {
  const page = Math.min(currentPage, totalPages)
  const total = Math.max(page, totalPages)

  if (totalPages <= 7) {
    return Array.from({ length: totalPages }).map((_, index) => index + 1)
  }

  if (page < 3) return [1, 2, 3, ELLIPSIS_LEFT, total - 1, total]

  if (page === 3) return [1, 2, 3, 4, ELLIPSIS_LEFT, total - 1, total]

  if (page > total - 2)
    return [1, 2, ELLIPSIS_RIGHT, total - 2, total - 1, total]

  if (page === total - 2)
    return [1, 2, ELLIPSIS_RIGHT, total - 3, total - 2, total - 1, total]

  return [1, ELLIPSIS_LEFT, page - 1, page, page + 1, ELLIPSIS_RIGHT, total]
}
