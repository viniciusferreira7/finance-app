'use client'

import { useGetMetrics } from '../hooks/use-get-metrics'
import { BiggestExpenses } from './ui/biggest-expenses'
import { CategoriesWithTheMostRecords } from './ui/categories-with-the-most-records'
import { IncomesAndExpenses } from './ui/incomes-and-expenses'
import { MonthlyEarningsAndExpensesBarChart } from './ui/monthly-incomes-and-expenses-bar-chart'
import { SkeletonCharts } from './ui/skeleton-charts'
import { TheBalanceOverTime } from './ui/the-balance-over-time'

export function Charts() {
  const { data, isLoading } = useGetMetrics()

  if (isLoading) {
    return <SkeletonCharts />
  }

  const hasMetricsData =
    !!data?.monthly_financial_summary.length &&
    !!data?.categories_with_most_records.length &&
    !!data?.biggest_expenses.length &&
    !!data?.monthly_balance_over_time.length

  return (
    <>
      {hasMetricsData ? (
        <div className="grid grid-cols-1 grid-rows-3 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <MonthlyEarningsAndExpensesBarChart
            data={data?.monthly_financial_summary}
          />
          <BiggestExpenses data={data?.biggest_expenses} />
          <CategoriesWithTheMostRecords
            data={data?.categories_with_most_records}
          />
          <IncomesAndExpenses data={data?.monthly_financial_summary} />
          <TheBalanceOverTime data={data?.monthly_balance_over_time} />
        </div>
      ) : (
        <div className="grid place-items-center p-6">
          <h3 className="text-2xl font-bold text-muted-foreground">
            No data available. Enter{' '}
            <strong className="text-primary">incomes</strong> and{' '}
            <strong className="text-primary">expenses</strong> to view the
            graphs.
          </h3>
        </div>
      )}
    </>
  )
}
