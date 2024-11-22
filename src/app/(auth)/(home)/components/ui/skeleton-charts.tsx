import { Skeleton } from '@/components/ui/skeleton'

import { EndDate } from './end-date'

export function SkeletonCharts() {
  return (
    <div className="flex flex-col gap-4">
      <EndDate />
      <div className="grid h-full w-full grid-cols-1 grid-rows-3 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Skeleton className="col-span-1 row-span-2 h-full w-full lg:col-span-2 lg:h-[780px]" />
        <Skeleton className="col-span-1 flex h-full w-full flex-col lg:max-h-[382px]" />
        <Skeleton className="col-span-1 flex h-full w-full flex-col lg:max-h-[382px]" />
        <Skeleton className="col-span-2 h-full w-full lg:max-h-[382px]" />
        <Skeleton className="col-span-4 h-full w-full" />
      </div>
    </div>
  )
}
