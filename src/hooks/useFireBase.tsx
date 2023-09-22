import React, { FC, useEffect, useState } from 'react'
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithCustomToken } from 'firebase/auth'
import { useAuth } from '@clerk/clerk-react'
import type { User } from 'firebase/auth'

const {
  PUBLIC_FB_APP_ID,
  PUBLIC_FB_MESSUREMENT_ID,
  PUBLIC_FB_API,
  PUBLIC_FB_AUTH_DOMAIN,
  PUBLIC_FB_PROJECT_ID,
  PUBLIC_FB_STORAGE_BUCKET,
  PUBLIC_FB_MESSAGING_SENDER_ID
} = import.meta.env

const firebaseConfig = {
  apiKey: PUBLIC_FB_API,

  authDomain: PUBLIC_FB_AUTH_DOMAIN,

  projectId: PUBLIC_FB_PROJECT_ID,

  storageBucket: PUBLIC_FB_STORAGE_BUCKET,

  messagingSenderId: PUBLIC_FB_MESSAGING_SENDER_ID,

  appId: PUBLIC_FB_APP_ID,

  measurementId: PUBLIC_FB_MESSUREMENT_ID
}

initializeApp(firebaseConfig)

export const useFireBase = () => {
  const [isFirebaseUser, setIsFirebaseUser] = useState<User | undefined>(
    undefined
  )
  const [isFireBaseReady, setIsFirebaseReady] = useState<boolean>(false)

  const { getToken } = useAuth()

  useEffect(() => {
    const signInWithClerk = async () => {
      const auth = getAuth()
      const token = await getToken({ template: 'integration_firebase' })
      const userCredentials = await signInWithCustomToken(auth, token as string)

      console.log(userCredentials.user)
    }

    signInWithClerk()
  }, [])
}
