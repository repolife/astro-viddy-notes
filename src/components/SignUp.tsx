import { useClerk } from '@clerk/clerk-react'

export const Signup = () => {
  const clerk = useClerk()
  return (
    <>
      <button onClick={() => clerk.openSignUp({})}>Sign up</button>{' '}
    </>
  )
}
