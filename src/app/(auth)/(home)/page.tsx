import { Metadata } from 'next'

import { MetricsCards } from './components/metric-cards'

export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <div className="">
      <MetricsCards />
    </div>
  )
}
