import { atom, useAtom } from 'jotai'

interface IncomesParams {
  searchParams?: {
    page?: number
    per_page?: number
    pagination_disabled?: boolean
  }
}

export const incomesParams = atom<IncomesParams>({
  searchParams: {
    page: 1,
    per_page: 15,
    pagination_disabled: false,
  },
})

export const useIncomesParams = () => useAtom(incomesParams)
