import { ReactNode } from 'react'

import { Footer, Header } from './components'

export default function LayoutAuth({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen w-full flex-col ">
      <Header />
      <main className="h-screen">{children}</main>
      <Footer />
    </div>
  )
}
