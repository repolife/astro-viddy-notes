import create from 'zustand'
import { devtools } from 'zustand/middleware'
import { mountStoreDevtool } from 'simple-zustand-devtools'

type State = {
  platform: string
  videoId: string
  actions: Actions
}

type Actions = {
  addPlatform: (platform: string) => void
  addVideoId: (id: string) => void
}

const useVideoStore = create<State>()((set) => ({
  videoId: '',
  platform: '',
  actions: {
    addPlatform: (platform: string) =>
      set(
        (state) => (
          console.log(platform),
          {
            ...state,
            platform
          }
        )
      ),
    addVideoId: (id: string) =>
      set(
        (state) => (
          console.log(id),
          {
            ...state,
            videoId: id
          }
        )
      )
  }
}))

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('PlatformStore', useVideoStore)
}

export const useVideos = () => useVideoStore((state) => state)
export const useVideoActions = () => useVideoStore((state) => state.actions)
