'use client'

import { DollarSign } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { GetBalanceResponse } from '@/services/balance'
import { formatCurrency } from '@/utils/currency/format-currency'

type BalanceProps = GetBalanceResponse

export function Balance({
  incomes_total,
  expenses_total,
  balance_total,
}: BalanceProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-medium">
          Balance:{' '}
          <span className="font-bold">{formatCurrency(balance_total)}</span>
        </CardTitle>
        <DollarSign className="size-4" />
      </CardHeader>
      <CardContent>
        {incomes_total > 0 && (
          <p className="text-md font-semibold">
            Total of incomes:{' '}
            <span className="text-emerald-600">
              {formatCurrency(incomes_total)}
            </span>
          </p>
        )}
        {expenses_total > 0 && (
          <p className="text-md font-semibold">
            Total of expenses:{' '}
            <span className="text-rose-600">
              {formatCurrency(expenses_total)}
            </span>
          </p>
        )}
      </CardContent>
    </Card>
  )
}
