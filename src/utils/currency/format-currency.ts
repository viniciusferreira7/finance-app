'use client'

import { convertToCurrency } from './convert-to-currency'

interface FormatCurrency {
  isToConvertToCurrency?: boolean
  IsOnlyNumber?: boolean
}

export function formatCurrency(
  value: number | undefined = 0,
  { isToConvertToCurrency = true, IsOnlyNumber = false }: FormatCurrency = {},
) {
  let numValue = parseFloat(value.toString())
  const storedRates = localStorage.getItem('finance-exchange-rates')
  const exchangeRates = storedRates ? JSON.parse(storedRates) : {}

  const [[currency, currencyValue]] = Object.entries(
    exchangeRates ?? [['USD', 1]],
  )

  if (isToConvertToCurrency) {
    const currency = convertToCurrency(value * Number(currencyValue))
    numValue = currency
  }

  if (IsOnlyNumber) {
    return numValue
  }

  return numValue.toLocaleString('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 2,
  })
}
