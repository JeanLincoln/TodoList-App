import { createContext, ReactNode, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, provider } from '../FirestoreEnv'
import { onAuthStateChanged, signInWithPopup } from 'firebase/auth'

type User = {
  uid: string | undefined
}

type AuthContextType = {
  user: User | undefined
  authentication: () => void
}

type AuthContextProviderProps = {
  children: ReactNode
}

const to = (promise: Promise<object>) =>
  promise.then((result) => [null, result]).catch((error) => [error])

export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User>()

  onAuthStateChanged(auth, (user) => user)

  const navigate = useNavigate()

  const authentication = async () => {
    const [error, result] = await to(signInWithPopup(auth, provider))
    if (error) {
      return console.log('an error happened')
    }
    return navigate('/')
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        return setUser(user)
      }
    })
    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider value={{ user, authentication }}>
      {children}
    </AuthContext.Provider>
  )
}
