import React, { FC, useState, useEffect } from 'react'
import { useVideos } from '../../store/videoStore'
import { Platform } from '../../constants/platform'
import { Button, Container } from '@mantine/core'
import YouTube, { YouTubeProps, YouTubePlayer } from 'react-youtube'
import Controls from '../Controls./Controls'
interface VideoProps {
  videoId: string
  platform: string
  src: string
}

export const YouTubeVideo: FC<VideoProps> = ({ videoId, platform, src }) => {
  const [timestamp, setTimestamp] = useState<number>(0)
  const [player, setPlayer] = useState<YouTubePlayer | null>(null)

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    setPlayer(event.target)
  }

  const onPause = () => {
    setTimestamp(player.getCurrentTime())
  }

  const changeTime = (seconds: number) => {
    player.seekTo(seconds)
    player.playVideo()
  }

  const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  }

  return (
    <Container>
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={onPlayerReady}
        onPause={onPause}
      />
      <Controls seconds={timestamp} changeTime={changeTime} />
    </Container>
  )
}

export default YouTubeVideo
