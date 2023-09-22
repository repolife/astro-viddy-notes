import React, { FC, useRef } from 'react'
import { Container, Button, Input } from '@mantine/core'
import { useNoteActions } from '../../store/noteStore'
import { useVideos } from '../../store/videoStore'
import { useInputState } from '@mantine/hooks'
import { TextInput, NumberInput } from '@mantine/core'
interface ControlsProps {
  seconds: number
  changeTime: (seconds: number) => void
}
export const Controls: FC<ControlsProps> = ({ seconds, changeTime }) => {
  const { videoId, platform } = useVideos()
  const { setNewNote } = useNoteActions()

  const [stringValue, setStringValue] = useInputState('')

  // const handleAddNote = () => {
  //     addNote({ note: stringValue, timestamp: seconds }, id: videoId)
  // }

  return (
    <Container>
      <Button onClick={() => changeTime(seconds)}>Click</Button>

      <TextInput
        value={stringValue}
        onChange={setStringValue}
        name='Add Note'
      ></TextInput>
      <Button onClick={() => setNewNote(stringValue, seconds, videoId)}>
        Add Note
      </Button>
    </Container>
  )
}

export default Controls
