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

export interface SearchParams {
  page?: number
  per_page?: number
  pagination_disabled?: boolean
  name?: string | null
  value?: string | null
  createdAt?: {
    from: string | null
    to: string | null
  }
  updatedAt?: {
    from: string | null
    to: string | null
  }
  category_id?: string | null
  sort?: string | null
}
