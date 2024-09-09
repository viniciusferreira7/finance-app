'use client'

import { useGetMetricsMonthly } from '../hook/use-get-metrics-monthly'
import { Balance } from './ui/balance'
import { MonthlyExpense } from './ui/monthly-expense'
import { MonthlyIncome } from './ui/monthly-income'
import { SkeletonCard } from './ui/skeleton-card'

export function MetricsCards() {
  const [incomes, expenses, balance] = useGetMetricsMonthly()

  const isLoading = incomes.isLoading || expenses.isLoading || balance.isLoading

  // FIXME: ajustar o loading dos card

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {isLoading ? (
        <>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </>
      ) : (
        <>
          {incomes.isLoading ? (
            <SkeletonCard />
          ) : (
            <MonthlyIncome
              amount={incomes.data?.amount ?? 0}
              diff_from_last_month={incomes.data?.diff_from_last_month ?? 0}
            />
          )}
          {expenses.isLoading ? (
            <SkeletonCard />
          ) : (
            <MonthlyExpense
              amount={expenses.data?.amount ?? 0}
              diff_from_last_month={expenses.data?.diff_from_last_month ?? 0}
            />
          )}
          {balance.isLoading ? (
            <SkeletonCard />
          ) : (
            <Balance
              incomes_total={balance.data?.incomes_total ?? 0}
              expenses_total={balance.data?.expenses_total ?? 0}
              balance_total={balance.data?.balance_total ?? 0}
            />
          )}
        </>
      )}
    </div>
  )
}
