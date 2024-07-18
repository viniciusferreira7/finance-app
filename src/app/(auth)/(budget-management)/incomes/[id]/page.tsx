import { IncomeDetails } from './components'

interface IncomesProps {
  params: {
    id: string
  }
}

export default function IncomePage({ params }: IncomesProps) {
  return (
    <main className="p-4 pt-6">
      <div className="mb-4 flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">
          Identifier: {params.id}
        </h1>
      </div>
      <IncomeDetails />
    </main>
  )
}
