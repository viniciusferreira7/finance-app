import { atom, useAtom } from 'jotai'

interface ExpensesParams {
  searchParams?: {
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
    category?: string | null
    sort?: string | null
  }
}

export const expensesParams = atom<ExpensesParams>({
  searchParams: {
    page: 1,
    per_page: 15,
    pagination_disabled: false,
  },
})

export const useExpensesParams = () => useAtom(expensesParams)
