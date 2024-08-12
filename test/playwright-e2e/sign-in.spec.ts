import { expect, test } from '@playwright/test'

// TODO: descobrir porque ele rodou o test E2E no github actions: https://github.com/viniciusferreira7/finance-app/actions/runs/10333343598/job/28605579321
test('should be able to sign in successfully', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Email').fill('john.doe@example.com')
  await page.getByLabel('Password').fill('123456')

  await page.getByRole('button', { name: 'Sign-in' }).click()

  const toast = page.getByText('Creating a session for you.')

  expect(toast).toBeVisible()

  const user = page.getByRole('button', { name: 'John doe' })

  expect(user).toBeVisible()

  await page.waitForTimeout(3000)
})

test('should not be able to sign in with wrong credentials', async ({
  page,
}) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Email').fill('wrong@example.com')
  await page.getByLabel('Password').fill('wrong-credentials')

  await page.getByRole('button', { name: 'Sign-in' }).click()

  const toast = page.getByText('Invalid credentials.').first()

  expect(toast).toBeVisible()
})
