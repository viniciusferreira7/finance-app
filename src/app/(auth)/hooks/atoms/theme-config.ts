import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

import { Theme } from '@/utils/theme/themes'

export type ThemeConfig = {
  theme: Theme['name']
  radius: number
}

const themeConfigAtom = atomWithStorage<ThemeConfig>('finance-theme-config', {
  theme: 'blue',
  radius: 0.5,
})

export function useThemeConfig() {
  return useAtom(themeConfigAtom)
}
