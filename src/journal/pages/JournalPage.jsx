import { useDispatch, useSelector } from "react-redux"

import { IconButton } from "@mui/material"
import { AddOutlined } from "@mui/icons-material"

import { startNewNote } from "../../store/journal"

import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"

export const JournalPage = () => {

  const dispatch = useDispatch();
  const { isSaving, activeNote } = useSelector(state => state.journal); 

  const onClickNewNote = () => {
    dispatch(startNewNote());
  }

  return (
    <JournalLayout className='animate__animated animate__fadeIn animate__faster' >
      {!!activeNote
        ? <NoteView />
        : <NothingSelectedView />
      }
      <IconButton
        onClick={onClickNewNote}
        size='large'
        disabled={isSaving}
        sx={{
          color: 'white',
          backgroundColor: 'error.main', ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>

    </JournalLayout>
  )
}
