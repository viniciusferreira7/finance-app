'use client'

import dayjs from 'dayjs'
import { useQueryState } from 'nuqs'
import { useMemo } from 'react'
import { Label, Pie, PieChart } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { cn } from '@/lib/utils'
import type { CategoryWithMostRecords } from '@/models/metrics'
import { createSlug } from '@/utils/create-slug'

import { generateRandomNumber } from '../../utils/generate-random-number'

interface CategoriesWithTheMostRecordsProps {
  data: CategoryWithMostRecords[] | undefined
}

export function CategoriesWithTheMostRecords({
  data,
}: CategoriesWithTheMostRecordsProps) {
  const [endDate] = useQueryState('endDate')

  const formattedDate = endDate ? dayjs(endDate).format('YYYY-MM-DD') : null

  const chartConfig = data?.reduce<ChartConfig>((acc, current) => {
    const slug = createSlug(current.name)

    const randomNumber = generateRandomNumber()

    acc[slug] = {
      label: current.name,
      color: `hsl(var(--chart-${randomNumber}))`,
    }

    return acc
  }, {})

  const chartData = data?.map((item) => {
    const slug = createSlug(item.name)

    return {
      name: item.name,
      value: Math.abs(item.expenses_quantity - item.incomes_quantity),
      fill: `var(--color-${slug})`,
    }
  })

  const totalVisitors = useMemo(() => {
    if (chartData) {
      return chartData.reduce((acc, curr) => acc + Number(curr.value), 0)
    }

    return 0
  }, [chartData])

  if (!chartConfig || !chartData) {
    return
  }

  const hasCategoriesWithTheMostRecordsData = data?.length

  return (
    <Card className="col-span-1 flex flex-col lg:max-h-[382px]">
      <CardHeader className="items-center pb-0">
        <CardTitle>Categories with the most records</CardTitle>
        <CardDescription>{formattedDate}</CardDescription>
      </CardHeader>
      <CardContent
        className={cn(
          'flex-1 pb-0',
          !hasCategoriesWithTheMostRecordsData &&
            'grid h-full place-items-center',
        )}
      >
        {hasCategoriesWithTheMostRecordsData ? (
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[230px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                innerRadius={60}
                strokeWidth={5}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-lg font-bold"
                          >
                            {totalVisitors.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                          >
                            Value
                          </tspan>
                        </text>
                      )
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        ) : (
          <CardDescription className="text-lg font-semibold text-muted-foreground">
            No data
          </CardDescription>
        )}
      </CardContent>
    </Card>
  )
}
