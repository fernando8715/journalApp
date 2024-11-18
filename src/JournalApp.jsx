import { AppTheme } from "./theme"
import { RouterProvider } from "react-router-dom"
import { AppRouter } from "./routes/AppRouter"

function JournalApp() {

  return (
    <>
      
      <RouterProvider router={AppRouter} />
      <AppTheme >

      </AppTheme>
    </>
  )
}

export default JournalApp
