import { atom, useAtom } from 'jotai'

import { FetchExpensesParams } from '@/services/expenses'

export const expensesParams = atom<FetchExpensesParams>({
  searchParams: {
    page: 1,
    per_page: 15,
    pagination_disabled: false,
  },
})

export const useExpensesParams = () => useAtom(expensesParams)
