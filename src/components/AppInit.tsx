import React, { FC, useEffect } from 'react'
import { Navbar } from './Navbar'
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
  useAuth
} from '@clerk/clerk-react'
import Iframe from './Iframe/Iframe'
import { Search } from './Search/Search'

const {
  PUBLIC_FB_APP_ID,
  PUBLIC_FB_MESSUREMENT_ID,
  PUBLIC_CLERK_PUBLISHABLE_KEY,
  PUBLIC_FB_API,
  PUBLIC_FB_AUTH_DOMAIN,
  PUBLIC_FB_PROJECT_ID,
  PUBLIC_FB_STORAGE_BUCKET,
  PUBLIC_FB_MESSAGING_SENDER_ID
} = import.meta.env

if (!PUBLIC_CLERK_PUBLISHABLE_KEY) {
  throw 'Missing Publishable Key'
}

const clerkPubKey = PUBLIC_CLERK_PUBLISHABLE_KEY

export const AppInit: FC = () => {
  return (
    <ClerkProvider publishableKey={PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <SignedIn>
        <Navbar />
        <Search />
        <Iframe />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>{' '}
    </ClerkProvider>
  )
}
