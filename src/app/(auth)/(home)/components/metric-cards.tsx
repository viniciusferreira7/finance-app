import { MonthlyExpense } from './ui/monthly-expense'
import { MonthlyIncome } from './ui/monthly-income'

export function MetricsCards() {
  return (
    <div className="grid gap-4 px-4 md:grid-cols-2 lg:grid-cols-4">
      <MonthlyIncome />
      <MonthlyExpense />
      <MonthlyIncome />
    </div>
  )
}
