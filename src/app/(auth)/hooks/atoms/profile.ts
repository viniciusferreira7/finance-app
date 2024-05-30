import { atom } from 'jotai'

import { UserProfile } from '@/models/user-profile'

interface Profile {
  profile: UserProfile | null
}

export const profileAtom = atom<Profile>({
  profile: null,
})
