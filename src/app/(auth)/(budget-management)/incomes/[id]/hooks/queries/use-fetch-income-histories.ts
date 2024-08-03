import { useInfiniteQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'

import { Income } from '@/models/income'
import { fetchIncomeHistories } from '@/services/incomes'
import { queryFnWrapper } from '@/utils/error/query-fn-wrapper'

export const useFetchIncomeHistories = () => {
  const { id } = useParams<{ id: string }>()

  const queryData = useInfiniteQuery({
    queryKey: ['income', id, 'fetch-income-histories'],
    queryFn: async ({ pageParam }) =>
      queryFnWrapper(fetchIncomeHistories, {
        incomeId: id,
        searchParams: {
          page: pageParam,
          per_page: 10
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.next,
  })

  const { data, ...query } = queryData

  console.log({ data })

  const histories = useMemo(() => {
    return data?.pages?.reduce<Omit<Income, 'updated_at'>[]>((acc, page) => {
      return [...acc, ...page?.results]
    }, [])
  }, [data])

  return {
    histories,
    ...query,
  }
}
