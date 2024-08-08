import { atom, useAtom } from 'jotai'

import { FetchCategoriesParams } from '@/services/categories'

export const categoriesParams = atom<FetchCategoriesParams>({
  searchParams: {
    page: 1,
    per_page: 15,
    pagination_disabled: false,
  },
})

export const useCategoriesParams = () => useAtom(categoriesParams)
