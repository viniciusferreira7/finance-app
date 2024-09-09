import { DollarSign } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { GetMetricsMonthlyIncomesResponse } from '@/services/incomes'
import { formatCurrency } from '@/utils/currency/format-currency'

type MonthlyIncomeProps = GetMetricsMonthlyIncomesResponse

export function MonthlyIncome({
  amount,
  diff_from_last_month,
}: MonthlyIncomeProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-medium">
          Total Income for the month
        </CardTitle>
        <DollarSign className="size-4" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{formatCurrency(amount)}</div>
        {diff_from_last_month > 0 && (
          <p className="text-sm font-semibold text-emerald-600">
            +{diff_from_last_month.toFixed(2)}% from last month
          </p>
        )}
        {diff_from_last_month === 0 && (
          <p className="text-sm font-semibold">
            {diff_from_last_month.toFixed(2)}% from last month
          </p>
        )}
        {diff_from_last_month < 0 && (
          <p className="text-sm font-semibold text-rose-600">
            {diff_from_last_month.toFixed(2)}% from last month
          </p>
        )}
      </CardContent>
    </Card>
  )
}
