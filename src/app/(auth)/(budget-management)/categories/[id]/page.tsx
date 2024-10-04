import { dehydrate } from '@tanstack/query-core'
import { HydrationBoundary } from '@tanstack/react-query'

import { getQueryClient } from '@/lib/get-query-client'
import { getCategory } from '@/services/categories'

import { CategoryDetails } from './components'

interface CategoryProps {
  params: {
    id: string
  }
}

export default async function CategoryPage({ params }: CategoryProps) {
  const queryClient = getQueryClient()

  queryClient.prefetchQuery({
    queryKey: ['get-category', 'id', params.id],
    queryFn: () =>
      getCategory({
        params,
      }),
  })

  return (
    <main className="p-4 pt-6">
      <div className="mb-4 flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">
          Identifier: {params.id}
        </h1>
      </div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <CategoryDetails />
      </HydrationBoundary>
    </main>
  )
}
