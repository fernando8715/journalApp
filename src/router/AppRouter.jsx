import { Navigate, Route, Routes } from 'react-router-dom'

import { useCheckAuth } from '../hooks'
import { CheckingAuth } from '../ui'
import { AuthRouthes } from '../auth/routes/AuthRouthes'
import { JournalRoutes } from '../journal/routes/JournalRoutes'


export const AppRouter = () => {

    const status = useCheckAuth();  

    if (status === 'checking') return <CheckingAuth />;

    return (
        <Routes>

            {status === 'authenticated' 
                ? <Route path='/*' element={<JournalRoutes />} />
                : <Route path='/auth/*' element={<AuthRouthes />} />
            }

            <Route path='/*' element={ <Navigate to='/auth/login'/> } />

        </Routes>
    )
}

