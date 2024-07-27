import { Metadata } from 'next'

import { ExpensesFilters, ExpensesTable } from './components'

export const metadata: Metadata = {
  title: 'Expenses',
}

export default function ExpensesPage() {
  return (
    <main className="p-4 pt-6">
      <div className="mb-4 flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Expenses</h1>
      </div>
      <ExpensesFilters />
      <ExpensesTable />
    </main>
  )
}
