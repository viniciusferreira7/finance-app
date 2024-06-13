import { Filters } from '../../components'

export function IncomesFilters() {
  return (
    <Filters.Root>
      <Filters.Name />
      <Filters.Value />
      <Filters.CreatedAt />
      <Filters.UpdateAt />
      <Filters.SelectCategories />
      <Filters.SelectSort />
    </Filters.Root>
  )
}
