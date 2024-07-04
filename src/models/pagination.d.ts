export interface Pagination<T> {
  count: number
  next: number | null
  previous: number | null
  page: number
  total_pages: number
  per_page: number
  pagination_disabled: boolean
  results: T[]
}
