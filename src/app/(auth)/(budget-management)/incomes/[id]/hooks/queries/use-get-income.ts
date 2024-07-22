import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'

import { getIncome } from '@/services/incomes/get-income'
import { queryFnWrapper } from '@/utils/error/query-fn-wrapper'

export const useGetIncome = () => {
  const params = useParams<{ id: string }>()

  const query = useQuery({
    queryKey: ['get-income', 'id', params.id],
    queryFn: async () =>
      await queryFnWrapper(getIncome, {
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
