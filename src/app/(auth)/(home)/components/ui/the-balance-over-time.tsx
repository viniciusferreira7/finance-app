'use client'

import dayjs from 'dayjs'
import { useQueryState } from 'nuqs'
import * as React from 'react'
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { cn } from '@/lib/utils'
import type { MonthlyBalanceOverTime } from '@/models/metrics'
import { formatCurrency } from '@/utils/currency/format-currency'

export const description = 'An interactive area chart'

const chartConfig = {
  balance: {
    label: 'Balance',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig

interface TheBalanceOverTimeProps {
  data: MonthlyBalanceOverTime[] | undefined
}

export function TheBalanceOverTime({ data }: TheBalanceOverTimeProps) {
  const [endDate] = useQueryState('endDate')

  const formattedDate = endDate ? dayjs(endDate).format('YYYY-MM-DD') : null

  if (!data) return

  const chartData = data.map((item) => {
    return {
      ...item,
      balance: formatCurrency(item.balance, { IsOnlyNumber: true }),
    }
  })

  const hasTheBalanceOverTimeData = data?.every((item) => {
    return item.balance !== 0
  })

  return (
    <Card className="col-span-4">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Balance</CardTitle>
          <CardDescription>{formattedDate}</CardDescription>
        </div>
      </CardHeader>
      <CardContent
        className={cn(
          'px-2 pt-4 sm:px-6 sm:pt-6',
          !hasTheBalanceOverTimeData && 'grid h-full place-items-center',
        )}
      >
        {hasTheBalanceOverTimeData ? (
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[250px] w-full"
          >
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="fillBalance" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-balance)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-balance)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                tickFormatter={(value) => {
                  const date = dayjs(value).format('MMM YYYY')
                  return date
                }}
              />
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent
                    labelFormatter={(value) => {
                      const date = dayjs(value).format('MMM YYYY')
                      return date
                    }}
                    indicator="dot"
                  />
                }
              />
              <Area
                dataKey="balance"
                type="natural"
                fill="url(#fillBalance)"
                stroke="var(--color-balance)"
                stackId="a"
              />
              <ChartLegend content={<ChartLegendContent />} />
            </AreaChart>
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
