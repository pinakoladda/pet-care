import React from 'react'
import { MainPage } from './features/MainPage/MainPage'
import { PetPage } from './features/PetPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { LoginPage } from './features/LoginPage'
import { RegistrationPage } from './features/RegistrationPage'
import { SettingsPage } from './features/SettingsPage'

const ROUTES = [
    { component: PetPage, path: /\/pet\/*/ },
    { component: LoginPage, path: /\/login/ },
    { component: RegistrationPage, path: /\/registration/ },
    { component: SettingsPage, path: /\/settings/ },
]

const queryClient = new QueryClient()

function App() {
    const PageComponent = React.useMemo(() => {
        const pathname = window.location.pathname

        if (pathname === '/') {
            return MainPage
        }

        const route = ROUTES.find((item) => item.path.test(pathname))

        const component = route?.component

        if (!component) {
            window.location.href = '/'
        }

        return component
    }, [])

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <PageComponent />
            </QueryClientProvider>
        </>
    )
}

export default App
