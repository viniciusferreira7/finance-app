import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

import { Rates } from '@/models/exchange-rates'

export type ExchangeRate = Partial<{
  [key in keyof Rates]: number
}>

const themeConfigAtom = atomWithStorage<ExchangeRate>(
  'finance-exchange-rates',
  {
    USD: 1,
  },
)

export function useExchangeRates() {
  return useAtom(themeConfigAtom)
}
