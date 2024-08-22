import { faker } from '@faker-js/faker'
import { expect, test } from '@playwright/test'

import { signIn } from './utils/sign-in'

test('should be able to update an category', async ({ page }) => {
  await signIn({ page })

  await page.goto('/categories', { waitUntil: 'networkidle' })

  await page
    .getByRole('row', { name: 'Categories details' })
    .getByRole('button')
    .first()
    .click()
  await page.waitForLoadState('networkidle')

  await page.getByRole('button', { name: 'Update' }).click()
  await page.waitForLoadState('networkidle')

  const categoryName = faker.finance.accountName()

  await page.getByLabel('Name').fill(categoryName)

  const categoryDescription = faker.helpers.arrayElement([
    faker.lorem.words({ min: 10, max: 40 }).slice(0, 220),
    faker.lorem.words({ min: 50, max: 100 }).slice(0, 220),
  ])

  await page.locator('textarea[name="description"]').fill(categoryDescription)
  await page.waitForLoadState('networkidle')

  await page.getByRole('button', { name: 'Update' }).click()
  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Category was updated successfully.')

  await expect(toast).toBeVisible()
})
