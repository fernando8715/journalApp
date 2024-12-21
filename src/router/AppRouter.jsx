import { Route, Routes } from 'react-router-dom'

import { useCheckAuth } from '../hooks'
import { CheckingAuth } from '../ui'
import { AuthRouthes } from '../auth/routes/AuthRouthes'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { JournalPage } from '../journal/pages/JournalPage'


export const AppRouter = () => {

    const status = useCheckAuth();

    if (status === 'checking') return <CheckingAuth />;

    return (
        // < RouterProvider router={router} />
        <Routes>
            {/* Login and register */}
            {status === 'not-authenticated' ?
                <Route path='/auth/*' element={<AuthRouthes />} />
                : <Route path='/*' element={<JournalPage />} />
            }

            {/*JournalApp  */}
            {status === 'authenticated' ?
                <Route path='/*' element={<JournalRoutes />} />
                : <Route path='/auth/*' element={<JournalRoutes />} />
            }
        </Routes>
    )
}

