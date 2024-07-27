import { atom, useAtom } from 'jotai'

import { FetchIncomesParams } from '@/services/incomes'

export const incomesParams = atom<FetchIncomesParams>({
  searchParams: {
    page: 1,
    per_page: 15,
    pagination_disabled: false,
  },
})

export const useIncomesParams = () => useAtom(incomesParams)
