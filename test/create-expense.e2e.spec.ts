import { faker } from '@faker-js/faker'
import { expect, test } from '@playwright/test'

import { signIn } from './utils/sign-in'

test('should be able to create an expense', async ({ page }) => {
  await signIn({ page })

  await page.getByRole('button', { name: 'Create' }).click()
  await page.waitForLoadState('networkidle')

  await page.getByRole('button', { name: 'Expense' }).click()
  await page.waitForLoadState('networkidle')

  const expenseName = faker.commerce.productName()

  await page.getByLabel('Name').fill(expenseName)

  const expenseValue = Number(faker.commerce.price({ min: 10, max: 1_000_000 }))

  await page.getByLabel('Value').fill(expenseValue.toString())

  await page.getByText('...').click()
  await page.waitForLoadState('networkidle')

  await page.getByPlaceholder('Search categories...').fill('a')

  await page.waitForLoadState('networkidle')

  await page.getByRole('option', { name: 'a' }).first().click()
  await page.waitForLoadState('networkidle')

  const expenseDescription = faker.helpers.arrayElement([
    faker.lorem.words({ min: 10, max: 40 }).slice(0, 220),
    faker.lorem.words({ min: 50, max: 100 }).slice(0, 220),
  ])

  await page.locator('textarea[name="description"]').fill(expenseDescription)

  await page.getByRole('button', { name: 'Create' }).click()
  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Expense was created successfully.')

  await expect(toast).toBeVisible()
})
