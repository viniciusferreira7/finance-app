import { render, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from 'vitest'

import { PaginationContainer } from './pagination-container'

let wrapper: RenderResult

const onPageChangeCallback = vi.fn()

describe('Pagination container', () => {
  beforeAll(() => {
    vi.mock('next/navigation', () => ({
      useRouter: () => ({
        replace: onPageChangeCallback,
      }),
    }))
  })

  beforeEach(() => {
    onPageChangeCallback.mockClear()
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('should display the right amount of pages and results', () => {
    wrapper = render(
      <PaginationContainer
        currentPage={1}
        perPage={10}
        totalPages={20}
        count={200}
      />,
    )

    expect(wrapper.getByText('Showing: 10')).toBeInTheDocument()
    expect(wrapper.getByText('200 records')).toBeInTheDocument()
  })

  it('should be able to navigate to the next page', async () => {
    const user = userEvent.setup()

    wrapper = render(
      <PaginationContainer
        currentPage={1}
        perPage={10}
        totalPages={20}
        count={200}
      />,
    )

    const nextPageButton = wrapper.getByText('2')

    await user.click(nextPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledOnce()
    expect(onPageChangeCallback).toHaveBeenCalledWith('?page=2')
  })

  it('should be able to navigate to the previous page', async () => {
    const user = userEvent.setup()

    wrapper = render(
      <PaginationContainer
        currentPage={1}
        perPage={10}
        totalPages={20}
        count={200}
      />,
    )

    const previousPageButton = wrapper.getByText('1')

    await user.click(previousPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledOnce()
    expect(onPageChangeCallback).toHaveBeenCalledWith('?page=1')
  })

  it('should be able to navigate to the last page', async () => {
    const user = userEvent.setup()

    wrapper = render(
      <PaginationContainer
        currentPage={20}
        perPage={10}
        totalPages={20}
        count={200}
      />,
    )

    const lastPageButton = wrapper.getByText('20')

    await user.click(lastPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledOnce()
    expect(onPageChangeCallback).toHaveBeenCalledWith('?page=20')
  })

  it('should be able to navigate to the first page', async () => {
    const user = userEvent.setup()

    wrapper = render(
      <PaginationContainer
        currentPage={2}
        perPage={10}
        totalPages={20}
        count={200}
      />,
    )

    const firstPageButton = wrapper.getByText('1')

    await user.click(firstPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledOnce()
    expect(onPageChangeCallback).toHaveBeenCalledWith('?page=1')
  })
})
