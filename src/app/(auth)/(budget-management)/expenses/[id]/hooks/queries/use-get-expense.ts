import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'

import { getExpense } from '@/services/expenses'
import { queryFnWrapper } from '@/utils/error/query-fn-wrapper'

export const useGetExpense = () => {
  const params = useParams<{ id: string }>()

  const query = useQuery({
    queryKey: ['get-expense', 'id', params.id],
    queryFn: async () =>
      await queryFnWrapper(getExpense, {
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
