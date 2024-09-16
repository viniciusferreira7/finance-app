import { Metadata } from 'next'

import { SettingsForm } from './components'
import { CurrencySelector } from './components/currency-selector'

export const metadata: Metadata = {
  title: 'Settings',
}

export default function SettingsPage() {
  return (
    <main className="p-4 pt-6">
      <div className="mb-4 flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
      </div>
      <div className="space-y-4">
        <SettingsForm />
        <CurrencySelector />
      </div>
    </main>
  )
}
