import { createBrowserRouter, Navigate } from 'react-router-dom'
import JournalApp from '../JournalApp'
import { LoginPage, RegisterPage } from '../auth/pages'
import {ErrorPage} from '../ErrorPage'
import { JournalPage } from '../journal/pages/JournalPage'

export const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <JournalPage />,
        children: [
            {
                path: '*',
                element: <Navigate to='/'/>
            }
        ]
        // errorElement: <ErrorPage />
    },
    {
        path: 'auth/*',
        children: [
            {
                path: 'login',
                element: <LoginPage />
            },
            {
                path: 'register',
                element: <RegisterPage />
            },
            {
                path: '*',
                element: <Navigate to='/auth/login' />
            }
        ]
    },
])

