'use client'

import dayjs from 'dayjs'
import { useQueryState } from 'nuqs'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'

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
import type { MonthlyFinancialSummary } from '@/models/metrics'
import { formatCurrency } from '@/utils/currency/format-currency'

export const description = 'A multiple bar chart'

const chartConfig = {
  income: {
    label: '',
    color: 'hsl(var(--primary))',
  },
  expense: {
    label: 'Mobile',
    color: 'hsl(var(--secondary))',
  },
} satisfies ChartConfig

interface MonthlyEarningsAndExpensesBarChartProps {
  data: MonthlyFinancialSummary[] | undefined
}

export function MonthlyEarningsAndExpensesBarChart({
  data,
}: MonthlyEarningsAndExpensesBarChartProps) {
  const [endDate] = useQueryState('endDate')

  const currentDate = dayjs().format('YYYY-MM-DD')

  const formattedDate = endDate
    ? dayjs(endDate).format(`${currentDate} [ to ] YYYY-MM-DD`)
    : currentDate

  const chartData = data?.map((item) => {
    return {
      month: dayjs(item.date).format('MMMM'),
      incomes: formatCurrency(item.incomes_total, { IsOnlyNumber: true }),
      expenses: formatCurrency(item.expenses_total, {
        IsOnlyNumber: true,
      }),
    }
  })

  const hasMonthlyEarningsAndExpensesData =
    data?.length &&
    data?.every((item) => {
      return item.expenses_total !== 0 && item.incomes_total !== 0
    })

  return (
    <Card className="col-span-1 row-span-2 lg:col-span-2 lg:max-h-[780px]">
      <CardHeader>
        <CardTitle>Monthly Earnings And Expenses</CardTitle>
        <CardDescription>{formattedDate}</CardDescription>
      </CardHeader>
      <CardContent
        className={cn(
          !hasMonthlyEarningsAndExpensesData &&
            'grid h-full place-items-center',
        )}
      >
        {hasMonthlyEarningsAndExpensesData ? (
          <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dashed" />}
              />
              <Bar dataKey="incomes" fill="var(--color-income)" radius={4} />
              <Bar dataKey="expenses" fill="var(--color-expense)" radius={4} />
            </BarChart>
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
