import { Button } from '@/components/ui/button'

export function ToggleLeft() {
  return (
    <div className="toggle-container w-full bg-gray-900/60">
      <div className="toggle">
        <div className="toggle-panel toggle-left">
          <h1>Welcome back</h1>
          <p>Enter your personal details to login.</p>
          <Button className="hidden">Sign In</Button>
        </div>
      </div>
    </div>
  )
}
