import { useInfiniteQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'

import { fetchExpenseHistories } from '@/services/expenses'
import { queryFnWrapper } from '@/utils/error/query-fn-wrapper'
import { Expense } from '@/models/expenses'

export const useFetchExpenseHistories = () => {
  const { id } = useParams<{ id: string }>()

  const queryData = useInfiniteQuery({
    queryKey: ['expense', id, 'fetch-expense-histories'],
    queryFn: async ({ pageParam }) =>
      queryFnWrapper(fetchExpenseHistories, {
        expenseId: id,
        searchParams: {
          page: pageParam,
          per_page: 10,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.next,
  })

  const { data, ...query } = queryData

  const histories = useMemo(() => {
    return data?.pages?.reduce<Omit<Expense, 'updated_at'>[]>((acc, page) => {
      return [...acc, ...page?.results]
    }, [])
  }, [data])

  return {
    histories,
    ...query,
  }
}
