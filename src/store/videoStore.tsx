import { createStore } from 'zustand/vanilla'

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

const useVideoStore = createStore<State>()(
  devtools((set) => ({
    videoId: '',
    platform: '',
    actions: {
      addPlatform: (platform: string) =>
        set((state) => ({
          ...state,
          platform
        })),
      addVideoId: (id: string) =>
        set((state) => ({
          ...state,
          videoId: id
        }))
    }
  }))
)

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('PlatformStore', useVideoStore)
}

export default useVideoStore
