import { useQuery } from '@tanstack/react-query'

import { fetchExpenses } from '@/services/expenses'
import { queryFnWrapper } from '@/utils/error/query-fn-wrapper'
import { getQueryKeys } from '@/utils/search-params/get-query-keys'

import { useExpensesParams } from '../atoms/fetch-expenses-params'

export const useFetchExpenses = () => {
  const [params, setParams] = useExpensesParams()

  const queryKeys = getQueryKeys(params.searchParams)

  const query = useQuery({
    queryKey: ['fetch-expenses', ...queryKeys],
    queryFn: async () => queryFnWrapper(fetchExpenses, params),
  })

  return {
    ...query,
    params,
    setParams,
  }
}
