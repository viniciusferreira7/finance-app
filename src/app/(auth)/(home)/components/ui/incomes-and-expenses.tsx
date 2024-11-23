'use client'

import dayjs from 'dayjs'
import { useQueryState } from 'nuqs'
import { Bar, BarChart, XAxis } from 'recharts'

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
import type { MonthlyFinancialSummary } from '@/models/metrics'
import { formatCurrency } from '@/utils/currency/format-currency'

export const description = 'A stacked bar chart with a legend'

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

interface IncomesAndExpensesProps {
  data: MonthlyFinancialSummary[] | undefined
}

export function IncomesAndExpenses({ data }: IncomesAndExpensesProps) {
  const [endDate] = useQueryState('endDate')

  const currentDate = dayjs().format('YYYY-MM-DD')

  const formattedDate = endDate
    ? dayjs(endDate).format(`${currentDate} [ to ] YYYY-MM-DD`)
    : currentDate

  const chartData = data?.map((item) => {
    return {
      date: dayjs(item.date).format('YYYY-MM-DD'),
      incomes: formatCurrency(item.incomes_total, { IsOnlyNumber: true }),
      expenses: formatCurrency(item.expenses_total, {
        IsOnlyNumber: true,
      }),
    }
  })

  return (
    <Card className="col-span-2 lg:max-h-[382px]">
      <CardHeader>
        <CardTitle>Incomes and expenses</CardTitle>
        <CardDescription>{formattedDate}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              height={353}
            />
            <Bar
              dataKey="incomes"
              stackId="a"
              fill="var(--color-income)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="expenses"
              stackId="a"
              fill="var(--color-expense)"
              radius={[4, 4, 0, 0]}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent labelKey="activities" indicator="line" />
              }
              cursor={false}
              defaultIndex={1}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
