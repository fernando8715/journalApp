import { Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView } from "../views"
import { NoteView } from "../views/NoteView"

export const JournalPage = () => {
  return (
    <JournalLayout>
      <NothingSelectedView />
      {/* <NoteView /> */}

      

    </JournalLayout>

  )
}
