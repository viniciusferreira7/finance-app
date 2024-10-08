import { BiggestExpenses } from './ui/biggest-expenses'
import { CategoriesWithTheMostRecords } from './ui/categories-with-the-most-records'
import { EndDate } from './ui/end-date'
import { IncomesAndExpenses } from './ui/incomes-and-expenses'
import { MonthlyEarningsAndExpensesBarChart } from './ui/monthly-incomes-and-expenses-bar-chart'
import { TheBalanceOverTime } from './ui/the-balance-over-time'

export function Charts() {
  return (
    <div className="flex flex-col gap-4">
      <EndDate />
      <div className="grid grid-cols-1 grid-rows-3 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MonthlyEarningsAndExpensesBarChart />
        <BiggestExpenses />
        <CategoriesWithTheMostRecords />
        <IncomesAndExpenses />
        <TheBalanceOverTime />
      </div>
    </div>
  )
}
