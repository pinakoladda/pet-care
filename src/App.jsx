import React from 'react'
import { MainPage } from './features/MainPage/MainPage'
import { PetPage } from './features/PetPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { LoginPage } from './features/LoginPage'
import { RegistrationPage } from './features/RegistrationPage'
import { SettingsPage } from './features/SettingsPage'
import { GlobalContext } from './contexts/GlobalContext'
import { useAuth } from './lib/api'

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
                <BaseApp>
                    <PageComponent />
                </BaseApp>
            </QueryClientProvider>
        </>
    )
}

export const BaseApp = ({ children }) => {
    const [theme, setTheme] = React.useState(
        localStorage.getItem('theme') || 'dark'
    )
    const [measure, setMeasure] = React.useState(
        localStorage.getItem('measure') || 'kilograms'
    )

    const isTokenExsist = Boolean(localStorage.getItem('token'))
    const { data, isLoading, isError } = useAuth({ enabled: isTokenExsist })

    const globalContext = {
        state: { theme, measure, user: data, isLoading, isAuthError: isError },
        actions: { setTheme, setMeasure },
    }

    React.useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    React.useEffect(() => {
        localStorage.setItem('measure', measure)
    }, [measure])

    return (
        <GlobalContext.Provider value={globalContext}>
            {children}
        </GlobalContext.Provider>
    )
}

export default App
