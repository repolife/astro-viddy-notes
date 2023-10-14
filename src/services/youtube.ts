export const initYoutubeAPI = (videoId: string) => {
  let tag = document.createElement('script')
  tag.src = 'https://www.youtube.com/iframe_api'
  var firstScriptTag = document.getElementsByTagName('script')[0]
  firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag)

  let player: any
  const onYouTubeIframeAPIReady = () => {
    //@ts-ignore
    player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: videoId,
      playerVars: {
        playsinline: 1
      },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange
      }
    })
  }

  const onPlayerReady = (event: any) => {
    event.target.playVideo()
  }

  let done = false
  const onPlayerStateChange = (event: any) => {
    //@ts-ignore
    if (event.data == YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 6000)
      done = true
    }
  }
  const stopVideo = () => {
    player.stopVideo()
  }
}
