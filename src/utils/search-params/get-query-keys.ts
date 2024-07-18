export function getQueryKeys<T extends object>(
  queries: T | undefined,
): string[] {
  if (queries) {
    const transformIntoArray = Object.entries(queries)

    const flatArray = transformIntoArray.flatMap((query) => {
      const [fieldName, value] = query

      if (value) {
        if (typeof value === 'object') {
          const subQuery = Object.entries(value).map((item) => {
            const [fieldItem, itemValue] = item

            if (itemValue) {
              return [`${fieldName}-${fieldItem}` ,itemValue ]
            }

            return []
          }).flatMap(item => item)

          return subQuery
        }
        return query
      }

      return []
    })

    return flatArray
  }
  return []
}
