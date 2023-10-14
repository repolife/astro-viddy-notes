import React, { FC, useEffect, useMemo, useState } from 'react'

declare global {
  interface Window {
    Rumble: (params: any, {}) => void
  }
}

export const useRumble = () => {
  const [isRumbleReady, setIsRumbleReady] = useState<boolean>(false)

  const Rumble: Window['Rumble'] = (window as any).Rumble

  useEffect(() => {
    if (Rumble === undefined) return

    setIsRumbleReady(true)
  }, [window])

  return { isRumbleReady, Rumble }
}
