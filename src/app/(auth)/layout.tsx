import { ReactNode } from 'react'
import { Header } from './components'

export default function LayoutAuth({ children }: { children: ReactNode }) {
  return (
    <div className="h-full w-full">
      <Header />
      {children}
    </div>
  )
}
