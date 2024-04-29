import { Button } from '@/components/ui/button'

export function ToggleRight() {
  return (
    <div className="toggle-container w-full bg-gray-900/60">
      <div className="toggle">
        <div className="toggle-panel toggle-right">
          <h1>Hello friend</h1>
          <p>Register your personal details to login.</p>
          <Button className="hidden">Sign Up</Button>
        </div>
      </div>
    </div>
  )
}
