import { Page } from '@playwright/test'

interface SignInProps {
  page: Page
}

export async function signIn({ page }: SignInProps) {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Email').fill('john.doe@example.com')
  await page.getByLabel('Password').fill('123456')

  await page.getByRole('button', { name: 'Sign-in' }).click()

  await page.waitForLoadState('networkidle')
}
