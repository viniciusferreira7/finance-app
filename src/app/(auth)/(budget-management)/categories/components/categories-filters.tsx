import { Filters } from '../../components'

export function CategoriesFilters() {
  return (
    <Filters.Root>
      <Filters.Name />
      <Filters.Value />
      <Filters.CreatedAt />
      <Filters.UpdatedAt />
      <Filters.SelectCategory />
      <Filters.SelectSort />
    </Filters.Root>
  )
}
