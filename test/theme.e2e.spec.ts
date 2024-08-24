import test from '@playwright/test'

import { signIn } from './utils/sign-in'

test('should be able to change theme', async ({ page }) => {
  await signIn({ page })

  await page.goto('/settings')

  await page.getByRole('button', { name: 'Toggle theme' }).click()
  await page.waitForLoadState('networkidle')

  await page.getByRole('menuitem', { name: 'Dark' }).click()
  await page.waitForLoadState('networkidle')

  await page.getByRole('button', { name: 'Customize' }).click()
  await page.waitForLoadState('networkidle')

  await page.getByRole('button', { name: 'Lime' }).click()
  await page.waitForLoadState('networkidle')
})
