import { useQuery } from '@tanstack/react-query'

import { fetchIncomes } from '@/services/incomes'
import { queryFnWrapper } from '@/utils/error/query-fn-wrapper'
import { getQueryKeys } from '@/utils/search-params/get-query-keys'

import { useIncomesParams } from '../atoms/fetch-incomes-params'

export const useFetchIncomes = () => {
  const [params, setParams] = useIncomesParams()

  const queryKeys = getQueryKeys(params.searchParams)

  const query = useQuery({
    queryKey: ['fetch-incomes', ...queryKeys],
    queryFn: async () => queryFnWrapper(fetchIncomes, params),
  })

  return {
    ...query,
    params,
    setParams,
  }
}
