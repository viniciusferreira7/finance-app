export function convertToCents(value: number | undefined) {
  if (value) {
    const convertsValueToCents = value * 100

    return convertsValueToCents
  }

  return null
}
