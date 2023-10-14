import { createStore } from 'zustand/vanilla'
import { devtools } from 'zustand/middleware'
import { mountStoreDevtool } from 'simple-zustand-devtools'

type Details = {}

interface Note {
  videoId: string
  body: string
  timestamp: number
  id: number
}
type State = {
  notes: Note[]
  newNote: {
    videoId: string
    body: string
    timestamp: number
  }
  actions: Actions
}

type Actions = {
  setNotes: (notes: Note[]) => void
  addNote: () => void
  updateNote: (id: number, text: string) => void
  removeNote: (id: number) => void
  setNewNote: (body: string, timestamp: number, videoId: string) => void
}

const updateNote = (notes: Note[], id: number, body: string): Note[] =>
  notes.map((note) => ({
    ...note,
    body: note.id === id ? body : note.body
  }))

const removeNote = (notes: Note[], id: number): Note[] =>
  notes.filter((note) => note.id !== id)

const addNote = (
  notes: Note[],
  body: string,
  timestamp: number,
  videoId: string
): Note[] => [
  ...notes,
  {
    id: Math.max(0, Math.max(...notes.map(({ id }) => id))) + 1,
    body,
    videoId,
    timestamp
  }
]

const useNoteStore = createStore<State>()(
  (set): State => ({
    notes: [],
    newNote: { videoId: '', timestamp: 0, body: '' },
    actions: {
      setNotes: (notes: Note[]) =>
        set((state) => ({
          ...state,
          notes
        })),
      removeNote: (id: number) =>
        set((state) => ({
          ...state,
          notes: removeNote(state.notes, id)
        })),
      updateNote: (id: number, text: string) =>
        set((state) => ({
          ...state,
          notes: updateNote(state.notes, id, text)
        })),

      setNewNote: (body: string, timestamp: number, videoId: string) =>
        set((state) => ({
          ...state,
          body,
          timestamp,
          videoId
        })),
      addNote: () =>
        set((state) => ({
          ...state,
          notes: addNote(
            state.notes,
            state.newNote.body,
            state.newNote.timestamp,
            state.newNote.videoId
          )
        }))
    }
  })
)

// if (process.env.NODE_ENV === 'development') {
//   mountStoreDevtool('Notes', useNoteStore)
// }

export default useNoteStore
