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
import type { Expense } from '@/models/expenses'
import { createSlug } from '@/utils/create-slug'
import { formatCurrency } from '@/utils/currency/format-currency'

interface BiggestExpensesProps {
  data: Expense[] | undefined
}

export function BiggestExpenses({ data }: BiggestExpensesProps) {
  const [endDate] = useQueryState('endDate')

  const formattedDate = endDate ? dayjs(endDate).format('YYYY-MM-DD') : null

  const chartConfig = data?.reduce<ChartConfig>(
    (acc, current, currentIndex) => {
      const slug = createSlug(current.name)

      acc[slug] = {
        label: current.name,
        color: `hsl(var(--chart-${(currentIndex + 1) % 35}))`,
      }

      return acc
    },
    {},
  )

  const chartData = data?.map((item) => {
    const slug = createSlug(item.name)

    return {
      expense: item.name,
      value: formatCurrency(item.value, { IsOnlyNumber: true }),
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

  return (
    <Card className="col-span-1 flex flex-col lg:max-h-[382px]">
      <CardHeader className="items-center pb-0">
        <CardTitle>Biggest expenses</CardTitle>
        {formattedDate && <CardDescription>{formattedDate}</CardDescription>}
      </CardHeader>
      <CardContent className="flex-1 pb-0">
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
              nameKey="expense"
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
      </CardContent>
    </Card>
  )
}
