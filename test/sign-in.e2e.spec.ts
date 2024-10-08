import { expect, test } from '@playwright/test'

test('should be able to sign in successfully', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Email').fill('john.doe@example.com')
  await page.getByLabel('Password').fill('123456')

  await page.getByRole('button', { name: 'Sign-in' }).click()

  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Creating a session for you.')

  await expect(toast).toBeVisible()

  await page.waitForLoadState('networkidle')

  const user = page.getByRole('button', { name: 'John doe' })

  await expect(user).toBeVisible()
})

test('should not be able to sign in with wrong credentials', async ({
  page,
}) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Email').fill('wrong@example.com')
  await page.getByLabel('Password').fill('wrong-credentials')

  await page.getByRole('button', { name: 'Sign-in' }).click()

  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Invalid credentials.').first()

  await expect(toast).toBeVisible()
})
