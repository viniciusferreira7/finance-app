export function formatCurrency(value: number | undefined = 0) {
  const convertToCurrency = (value / 100).toString()
  const numValue = parseFloat(
    convertToCurrency.replace(/[^0-9,-]+/g, '').replace(',', '.'),
  )
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 2,
  }).format(numValue)
}
