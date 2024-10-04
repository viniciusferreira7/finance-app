import { Metadata } from 'next'

import { getQueryClient } from '@/lib/get-query-client'
import { getExchangeRates } from '@/services/exchange-rates/get-exchange-rates'

import { SettingsForm } from './components'
import { CurrencySelector } from './components/currency-selector'

export const metadata: Metadata = {
  title: 'Settings',
}

export default async function SettingsPage() {
  const queryClient = getQueryClient()

  queryClient.prefetchQuery({
    queryKey: ['get-exchange-rates'],
    queryFn: () => getExchangeRates(),
  })

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
