'use client'

import { convertToCurrency } from './convert-to-currency'

interface FormatCurrency {
  isToConvertToCurrency?: boolean
}

export function formatCurrency(
  value: number | undefined = 0,
  { isToConvertToCurrency = true }: FormatCurrency = {},
) {
  let numValue = parseFloat(value.toString())
  const exchangeRates = JSON.parse(
    localStorage.getItem('finance-exchange-rates') ?? '',
  )

  const [[currency, currencyValue]] = Object.entries(exchangeRates ?? {})

  if (isToConvertToCurrency) {
    const currency = convertToCurrency(value * Number(currencyValue))
    numValue = currency
  }

  return numValue.toLocaleString('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 2,
  })
}
