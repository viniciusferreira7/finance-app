'use client'

import { Colors } from './colors'

export function SettingsForm() {
  return (
    <div className="rounded-md border p-2">
      <form className="p-2">
        <div className="space-y-2">
          <h2 className="text-bold text-lg">Customize your theme</h2>
          <Colors />
        </div>
      </form>
    </div>
  )
}
