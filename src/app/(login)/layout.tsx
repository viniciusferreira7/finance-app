import { Coins } from 'lucide-react'
import { ReactNode } from 'react'

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid h-screen  md:grid-cols-3">
      <div className="flex h-20 flex-col justify-between bg-foreground/10 p-4 md:col-span-1 md:h-full">
        <div className="flex items-center gap-2 text-lg">
          <Coins /> <span className="font-bold">finance.app</span>
        </div>
        <footer>
          <p className="text-sm">finance.app &copy;</p>
        </footer>
      </div>
      <div className="grid place-items-center p-4 md:col-span-2">
        {children}
      </div>
    </div>
  )
}
