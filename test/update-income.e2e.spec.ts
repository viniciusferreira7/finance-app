import { faker } from '@faker-js/faker'
import { expect, test } from '@playwright/test'

import { signIn } from './utils/sign-in'

test('should be able to update an income', async ({ page }) => {
  await signIn({ page })

  await page.goto('/incomes', { waitUntil: 'networkidle' })

  await page
    .getByRole('row', { name: 'Incomes details' })
    .getByRole('button')
    .first()
    .click()
  await page.waitForLoadState('networkidle')

  await page.getByRole('button', { name: 'Update' }).click()
  await page.waitForLoadState('networkidle')

  const incomeName = faker.finance.accountName()

  await page.getByLabel('Name').fill(incomeName)

  const incomeValue = Number(faker.finance.amount({ min: 10, max: 1_000_000 }))

  await page.getByLabel('Value').fill(incomeValue.toString())

  await page.getByTestId('category').click()
  await page.waitForLoadState('networkidle')

  await page.getByRole('option', { name: 'a' }).first().click()
  await page.waitForLoadState('networkidle')

  const incomeDescription = faker.helpers.arrayElement([
    faker.lorem.words({ min: 10, max: 40 }).slice(0, 220),
    faker.lorem.words({ min: 50, max: 100 }).slice(0, 220),
  ])

  await page.locator('textarea[name="description"]').fill(incomeDescription)

  await page.getByRole('button', { name: 'Update' }).click()
  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Income was updated successfully.')

  await expect(toast).toBeVisible()
})
