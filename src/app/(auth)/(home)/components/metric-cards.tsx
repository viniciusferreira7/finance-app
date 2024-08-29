import { useGetMetricsMonthly } from '../hook/use-get-metrics-monthly'
import { MonthlyExpense } from './ui/monthly-expense'
import { MonthlyIncome } from './ui/monthly-income'
import { SkeletonCard } from './ui/skeleton-card'

export function MetricsCards() {
  const [incomes] = useGetMetricsMonthly()

  return (
    <div className="grid gap-4 px-4 md:grid-cols-2 lg:grid-cols-3">
      {incomes.isLoading ? (
        <SkeletonCard />
      ) : (
        <MonthlyIncome
          amount={incomes.data?.amount ?? 0}
          diff_from_last_month={incomes.data?.diff_from_last_month ?? 0}
        />
      )}
      <MonthlyExpense />
    </div>
  )
}
