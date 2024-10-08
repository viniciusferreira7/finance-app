import { faker } from '@faker-js/faker'
import { expect, test } from '@playwright/test'

test('should be able to create a new account', async ({ page }) => {
  await page.goto('/sign-up')

  const name = faker.person.firstName()

  const fullName = faker.person.fullName({
    firstName: name,
  })
  const email = faker.internet.email({
    firstName: name,
  })
  const password = faker.internet.password({
    length: 6,
  })

  await page.locator('#name').fill(fullName)
  await page.getByLabel('Email').fill(email)
  await page.getByLabel('Password').fill(password)

  await page.getByRole('button', { name: 'Sign-up' }).click()

  await page.waitForLoadState('networkidle')

  const toast = page.getByText('User was created successfully.')

  await expect(toast).toBeVisible()

  const sessionInfoToast = page.getByText('Session created for your user.')

  await expect(sessionInfoToast).toBeVisible()

  await page.waitForLoadState('networkidle')

  const user = page.getByRole('button', { name: fullName })

  await expect(user).toBeVisible()

  await page.waitForLoadState('networkidle')
})
