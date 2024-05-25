import { Metadata } from 'next'

import { SettingsForm } from './components'

export const metadata: Metadata = {
  title: 'Settings',
}

export default function SettingsPage() {
  return (
    <main className="p-4 pt-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
      </div>
      <SettingsForm />
    </main>
  )
}
