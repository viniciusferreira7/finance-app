'use client'

import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import { fetchCategories, FetchCategoriesParams } from '@/services/categories'
import { queryFnWrapper } from '@/utils/error/query-fn-wrapper'
import { getQueryKeys } from '@/utils/search-params/get-query-keys'

export const useFetchCategories = () => {
  const [params, setParams] = useState<FetchCategoriesParams>({
    searchParams: {
      pagination_disabled: false,
    },
  })

  const queriesKeys = getQueryKeys(params.searchParams)

  const query = useQuery({
    queryKey: ['fetch-categories', ...queriesKeys],
    queryFn: async () => queryFnWrapper(fetchCategories, params),
  })

  return { ...query, setParams }
}
