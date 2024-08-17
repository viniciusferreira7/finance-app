import { faker } from '@faker-js/faker'
import { expect, test } from '@playwright/test'

import { signIn } from './utils/sign-in'

test('should be able to create an category', async ({ page }) => {
  await signIn({ page })

  await page.getByRole('button', { name: 'Create' }).click()
  await page.waitForLoadState('networkidle')

  await page.getByRole('button', { name: 'Category' }).click()
  await page.waitForLoadState('networkidle')

  const categoryName = faker.lorem.words({ min: 1, max: 4 })

  await page.getByLabel('Name').fill(categoryName)

  const categoryDescription = faker.helpers.arrayElement([
    faker.lorem.words({ min: 10, max: 40 }).slice(0, 220),
    faker.lorem.words({ min: 50, max: 100 }).slice(0, 220),
  ])

  await page.locator('textarea[name="description"]').fill(categoryDescription)

  await page.getByRole('button', { name: 'Create' }).click()
  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Category was created successfully.')

  await expect(toast).toBeVisible()
})
