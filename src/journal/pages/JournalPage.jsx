import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView } from "../views"

export const JournalPage = () => {
  return (
    <JournalLayout className='animate__animated animate__fadeIn animate__faster' >
      <NothingSelectedView />
      {/* <NoteView /> */}    

    </JournalLayout>
  )
}
