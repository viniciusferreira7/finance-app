import { Metadata } from 'next'

import { Charts } from './components/charts'
import { MetricsCards } from './components/metric-cards'

export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <div className="space-y-10 p-4">
      <MetricsCards />
      <Charts />
    </div>
  )
}
