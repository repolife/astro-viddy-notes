import React, { FC, useMemo } from 'react'
import useVideoStore from '../../store/videoStore'
import { Platform } from '../../constants/platform'
import { RumbleContainer } from '../Rumble/Rumble'
import { YouTubeVideo } from '../Youtube/Youtube'
import { useStore } from 'zustand'

interface IframeProps {
  children: React.ReactNode
}

export const Iframe: FC<IframeProps> = ({ children }) => {
  const { platform, videoId } = useStore(useVideoStore)
  const timestamp = 0

  const preparedSource = useMemo(() => {
    switch (platform) {
      case Platform.YOUTUBE:
        return `https://www.${platform}.com/$/embed/${videoId}?t=${timestamp}`

        break

      default:
        return `https://www.${platform}.com/embed/${videoId}`
        break
    }
  }, [platform, videoId])

  if (videoId === '') {
    return <h2>Please set Video Id</h2>
  }

  switch (platform) {
    case Platform.RUMBLE:
      return <>{children}</>

    case Platform.YOUTUBE:
      return (
        <YouTubeVideo
          src={preparedSource}
          platform={platform}
          videoId={videoId}
        />
      )
    default:
      return (
        <YouTubeVideo
          src={preparedSource}
          platform={platform}
          videoId={videoId}
        />
      )
  }
}

export default Iframe
