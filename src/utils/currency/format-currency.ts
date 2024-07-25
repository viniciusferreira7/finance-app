import { convertToCurrency } from './convert-to-currency'

interface FormatCurrency {
  isToConvertToCurrency?: boolean
}

export function formatCurrency(
  value: number | undefined = 0,
  { isToConvertToCurrency = true }: FormatCurrency = {},
) {
  let numValue = parseFloat(value.toString())

  if (isToConvertToCurrency) {
    const currency = convertToCurrency(value)
    numValue = currency
  }

  return numValue.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 2,
  })
}
