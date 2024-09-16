'use client'

import { useQuery } from '@tanstack/react-query'

import { getExchangeRates } from '@/services/exchange-rates/get-exchange-rates'
import { queryFnWrapper } from '@/utils/error/query-fn-wrapper'

export const useGetExchangeRates = () => {
  const query = useQuery({
    queryKey: ['get-exchange-rates'],
    queryFn: async () => queryFnWrapper(getExchangeRates, {}),
  })

  return query
}
