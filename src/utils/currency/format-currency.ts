import { convertToCurrency } from './convert-to-currency'

export function formatCurrency(value: number | undefined = 0) {
  const currency = convertToCurrency(value).toString()
  const numValue = parseFloat(
    currency.replace(/[^0-9,-]+/g, '').replace(',', '.'),
  )
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 2,
  }).format(numValue)
}
