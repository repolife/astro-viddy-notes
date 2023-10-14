import React, { FC, useState } from 'react'
import useNoteStore from '../../store/noteStore'
import { useStore } from 'zustand'
import useVideoStore from '../../store/videoStore'
import { TextInput, NumberInput } from '@mantine/core'
interface ControlsProps {
  seconds: number
  changeTime: (seconds: number) => void
}
export const Controls: FC<ControlsProps> = ({ seconds, changeTime }) => {
  const { videoId, platform } = useVideoStore.getState()
  // const { setNewNote } = useNoteActions()
  const setNewNote = (body: string, timestamp: number, videoId: string) =>
    useNoteStore.setState({ newNote: { body, timestamp, videoId } })
  const [stringValue, setStringValue] = useState('')

  // seconds

  return (
    <>
      <button onClick={() => changeTime(20)}>Click</button>

      <input
        type='text'
        value={stringValue}
        onChange={(e) => setStringValue(e.target.value)}
        name='Add Note'
      ></input>
      <button onClick={() => setNewNote(stringValue, seconds, videoId)}>
        Add Note
      </button>
    </>
  )
}
