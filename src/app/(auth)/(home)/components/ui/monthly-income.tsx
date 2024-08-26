import { DollarSign } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthlyIncome() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Income</CardTitle>
        <DollarSign className="size-4" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">$45,231.89</div>
        <p className="text-xs font-semibold text-emerald-600">
          +20.1% from last month
        </p>
      </CardContent>
    </Card>
  )
}
