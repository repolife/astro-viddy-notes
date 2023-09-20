import React from 'react'

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
  SignIn,
  SignUp
} from '@clerk/clerk-react'

const { PUBLIC_CLERK_PUBLISHABLE_KEY } = import.meta.env

// firebase.initializeApp({
//   apiKey: FB_API,

//   authDomain: FB_AUTH_DOMAIN,

//   projectId: FB_PROJECT_ID,

//   storageBucket: FB_STORAGE_BUCKET,

//   messagingSenderId: FB_MESSAGING_SENDER_ID,

//   appId: FB_APP_ID,

//   measurementId: FB_MESSUREMENT_ID
// })

if (!PUBLIC_CLERK_PUBLISHABLE_KEY) {
  throw 'Missing Publishable Key'
}

const clerkPubKey = PUBLIC_CLERK_PUBLISHABLE_KEY

export const AppInit = () => {
  return (
    <ClerkProvider publishableKey={PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <SignedIn>
        <h2>nigga</h2>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>{' '}
    </ClerkProvider>
  )
}
