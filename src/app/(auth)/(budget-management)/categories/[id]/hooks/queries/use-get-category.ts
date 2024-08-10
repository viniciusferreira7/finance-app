import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'

import { getCategory } from '@/services/categories'
import { queryFnWrapper } from '@/utils/error/query-fn-wrapper'

export const useGetCategory = () => {
  const params = useParams<{ id: string }>()

  const query = useQuery({
    queryKey: ['get-category', 'id', params.id],
    queryFn: async () =>
      await queryFnWrapper(getCategory, {
        params: {
          id: params.id,
        },
      }),
  })

  return {
    ...query,
    params,
  }
}
