export function removeUndefinedValues<T extends object>(
  obj: T,
): Record<string, string> {
  return Object.entries(obj).reduce(
    (acc, [key, value]) => {
      if (value !== undefined) acc[key] = String(value)

      return acc
    },
    {} as Record<string, string>,
  )
}
