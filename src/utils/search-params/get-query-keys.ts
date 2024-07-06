export function getQueryKeys<T extends object>(
  queries: T | undefined,
): string[] {
  if (queries) {
    const transformIntoArray = Object.entries(queries)

    const flatArray = transformIntoArray.flatMap((query) => query)

    return flatArray
  }
  return []
}
