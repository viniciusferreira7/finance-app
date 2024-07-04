'use client'

import { useQuery } from '@tanstack/react-query'

import { fetchCategories } from '@/services/categories/fetch-categories'
import { queryFnWrapper } from '@/utils/error/query-fn-wrapper'

export const useFetchCategories = () => {
  const query = useQuery({
    queryKey: ['fetch-categories'],
    queryFn: async () => queryFnWrapper(fetchCategories, {}),
  })

  return query
}
