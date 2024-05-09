'use client'

import { createContext, ReactNode, useContext, useState } from 'react'

type ActiveForm = 'sign-up' | 'sign-in'

interface LoginContextType {
  activeForm: ActiveForm
  onSetActiveForm: (name: ActiveForm) => void
}

export const LoginContext = createContext({} as LoginContextType)

export function LoginProvider({ children }: { children: ReactNode }) {
  const [activeForm, setCurrentForm] = useState<ActiveForm>('sign-up')

  function onSetActiveForm(activeForm: ActiveForm) {
    setCurrentForm(activeForm)
  }

  return (
    <LoginContext.Provider value={{ activeForm, onSetActiveForm }}>
      {children}
    </LoginContext.Provider>
  )
}

export const useLogin = () => useContext(LoginContext)
