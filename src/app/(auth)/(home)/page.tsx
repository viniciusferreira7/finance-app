import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <div className="">
      <h2>Hello word</h2>
      <h1 className="text-primary">Texto com cor primária</h1>
    </div>
  )
}
