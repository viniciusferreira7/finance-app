'use client'

import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import { fetchCategories, FetchCategoriesParams } from '@/services/categories'
import { queryFnWrapper } from '@/utils/error/query-fn-wrapper'
import { getQueryKeys } from '@/utils/get-query-keys'

export const useFetchCategories = () => {
  const [params, setParams] = useState<FetchCategoriesParams>()

  const queriesKeys = getQueryKeys(params)

  const query = useQuery({
    queryKey: ['fetch-categories', ...queriesKeys],
    queryFn: async () => queryFnWrapper(fetchCategories, {}),
  })

  return { ...query, setParams }
}
