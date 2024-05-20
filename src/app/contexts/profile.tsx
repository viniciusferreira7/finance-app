'use client'

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

import { UserProfile } from '@/models/user-profile'

import { useGetUserProfile } from '../(auth)/hooks/queries/use-get-user-profile'

interface State {
  profile: UserProfile | null
  isLoading: boolean
}

interface Action {
  onSetProfile: (user: UserProfile) => void
}

type ProfileContextProps = State & Action

const ProfileContext = createContext({} as ProfileContextProps)

export function ProfileProvider({ children }: { children: ReactNode }) {
  const { data, isLoading } = useGetUserProfile()
  const [profile, setProfile] = useState<UserProfile | null>(null)

  function onSetProfile(data: UserProfile) {
    setProfile(data)
  }

  useEffect(() => {
    if (data) onSetProfile(data)
    console.log(data)
  }, [data])

  return (
    <ProfileContext.Provider value={{ profile, isLoading, onSetProfile }}>
      {children}
    </ProfileContext.Provider>
  )
}

export const useProfile = () => useContext(ProfileContext)
