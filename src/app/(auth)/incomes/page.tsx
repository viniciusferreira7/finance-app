import { Metadata } from 'next'

import { IncomesTable } from './components/incomes-table'

export const metadata: Metadata = {
  title: 'Incomes',
}

export default function IncomesPage() {
  return (
    <main className="p-4 pt-6">
      <div className="mb-4 flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Incomes</h1>
      </div>
      <IncomesTable />
    </main>
  )
}
