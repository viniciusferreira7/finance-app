import { useQuery } from '@tanstack/react-query'

import { fetchCategories } from '@/services/categories'
import { queryFnWrapper } from '@/utils/error/query-fn-wrapper'
import { getQueryKeys } from '@/utils/search-params/get-query-keys'

import { useCategoriesParams } from '../atoms/fetch-categories-params'

export const useFetchCategories = () => {
  const [params, setParams] = useCategoriesParams()

  const queryKeys = getQueryKeys(params.searchParams)

  const query = useQuery({
    queryKey: ['fetch-categories', ...queryKeys],
    queryFn: async () => queryFnWrapper(fetchCategories, params),
  })

  return {
    ...query,
    params,
    setParams,
  }
}
