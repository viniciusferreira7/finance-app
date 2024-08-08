'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { updateCategory, UpdateCategoryParams } from '@/services/categories'
import { FetchCategoriesResponse } from '@/services/categories/fetch-categories'
import { queryFnWrapper } from '@/utils/error/query-fn-wrapper'

export const useUpdateCategory = () => {
  const query = useQueryClient()

  function updateCategoriesCached(
    categoriesId: string,
    data: UpdateCategoryParams['payload'],
  ) {
    const categoriesListCache = query.getQueriesData<FetchCategoriesResponse>({
      queryKey: ['fetch-categories'],
    })
    categoriesListCache.forEach(([cacheKey, cacheData]) => {
      if (!cacheData) {
        return
      }

      query.setQueryData<FetchCategoriesResponse>(cacheKey, {
        ...cacheData,
        results: cacheData?.results.map((categories) => {
          if (categories.id === categoriesId) {
            return { ...categories, ...data }
          }

          return categories
        }),
      })
    })
  }

  return useMutation({
    mutationKey: ['update-categories'],
    mutationFn: async (params: UpdateCategoryParams) => {
      toast.info('Updating the categories')

      return await queryFnWrapper(updateCategory, params)
    },
    onSuccess: (_, { params, payload }) => {
      toast.success('Categories was updated successfully.')

      updateCategoriesCached(params.id, payload)
    },
    onSettled: () => {
      query.invalidateQueries()
    },
  })
}
