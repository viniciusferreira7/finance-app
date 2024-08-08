import { Filters } from '../../components'

export function CategoriesFilters() {
  return (
    <Filters.Root>
      <Filters.Name />
      <Filters.CreatedAt />
      <Filters.UpdatedAt />
      <Filters.SelectSort />
    </Filters.Root>
  )
}
