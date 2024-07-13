import { Coins } from 'lucide-react'

export default function LoadingPage() {
  return (
    <div className="grid h-screen place-items-center">
      <div className="flex animate-bounce items-center gap-2 text-lg">
        <Coins /> <span className="font-bold">finance.app</span>
      </div>
    </div>
  )
}
