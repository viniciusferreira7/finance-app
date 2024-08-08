'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { deleteCategory, DeleteCategoryParams } from '@/services/categories'
import { FetchCategoriesResponse } from '@/services/categories/fetch-categories'
import { queryFnWrapper } from '@/utils/error/query-fn-wrapper'

export const useDeleteCategory = () => {
  const query = useQueryClient()

  function deleteCategoryCached(categoryId: string) {
    const categoryListCache = query.getQueriesData<FetchCategoriesResponse>({
      queryKey: ['fetch-categories'],
    })
    categoryListCache.forEach(([cacheKey, cacheData]) => {
      if (!cacheData) {
        return
      }

      query.setQueryData<FetchCategoriesResponse>(cacheKey, {
        ...cacheData,
        results: cacheData?.results.filter(
          (category) => category.id !== categoryId,
        ),
      })
    })
  }
  return useMutation({
    mutationKey: ['delete-category'],
    mutationFn: async (params: DeleteCategoryParams) => {
      toast.info('Deleting the category')

      return await queryFnWrapper(deleteCategory, params)
    },
    onSuccess: (_, { params }) => {
      toast.success('Category was deleted successfully.')

      deleteCategoryCached(params.id)
    },
    onSettled: () => {
      query.invalidateQueries()
    },
  })
}
