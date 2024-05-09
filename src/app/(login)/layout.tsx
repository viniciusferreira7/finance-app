import { IconCoins } from '@tabler/icons-react'
import { ReactNode } from 'react'

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid h-screen grid-cols-3">
      <div className="col-span-1 bg-foreground/10 p-4">
        <div className="flex items-center gap-2 text-lg">
          <IconCoins /> <span className="font-bold">finance.app</span>
        </div>
      </div>
      <div className="col-span-2 grid place-items-center">{children}</div>
    </div>
  )
}
