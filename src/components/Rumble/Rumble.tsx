import React, { FC, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet'
import { useRumble } from '../../hooks/useRumble'
interface VideoProps {
  children: React.ReactNode
  videoId: string
  platform: string
  src: string
}

export const RumbleContainer: FC<VideoProps> = ({ videoId, platform, src }) => {
  const rumbleRef = useRef(null)
  if (window.Rumble === undefined) {
    return null
  }

  return (
    <>
      <div ref={rumbleRef} id='rumble_v3i43s4'></div>
      dangerouslySetInnerHTML=
      {{
        __html: 'data:text/javascript;base64,' + btoa("alert('Hello World')")
      }}
    </>
  )
}
