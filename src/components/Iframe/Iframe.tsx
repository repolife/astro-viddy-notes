import React, { useMemo } from 'react'
import useVideosStore from '../../store/videoStore'
import { Platform } from '../../constants/platform'
import { RumbleContainer } from '../Rumble/Rumble'
import { YouTubeVideo } from '../Youtube/Youtube'

export const Iframe = () => {
  const { platform, videoId } = useVideosStore.getState()
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
    // case Platform.RUMBLE:
    //   return (
    //     <RumbleContainer
    //       src={preparedSource}
    //       videoId={videoId}
    //       platform={platform}
    //     />
    //   )

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
