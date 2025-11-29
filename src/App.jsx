import React from 'react'
import { MainPage } from './features/MainPage/MainPage'
import { PetPage } from './features/PetPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { LoginPage } from './features/LoginPage'
import { RegistrationPage } from './features/RegistrationPage'
import { SettingsPage } from './features/SettingsPage'
import { GlobalContext } from './contexts/GlobalContext'
import { useAuth } from './lib/api'
import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { messages as enMessages } from './locales/en/messages.json'
import { messages as deMessages } from './locales/de/messages.json'
import { messages as esMessages } from './locales/es/messages.json'
import { messages as frMessages } from './locales/fr/messages.json'
import { messages as ruMessages } from './locales/ru/messages.json'
import { messages as uaMessages } from './locales/ua/messages.json'
import { messages as jaMessages } from './locales/ja/messages.json'
import { messages as plMessages } from './locales/pl/messages.json'

const ROUTES = [
    { component: PetPage, path: /\/pet\/*/ },
    { component: LoginPage, path: /\/login/ },
    { component: RegistrationPage, path: /\/registration/ },
    { component: SettingsPage, path: /\/settings/ },
]

const queryClient = new QueryClient()

i18n.load({
    en: enMessages,
    de: deMessages,
    fr: frMessages,
    es: esMessages,
    ru: ruMessages,
    ua: uaMessages,
    ja: jaMessages,
    pl: plMessages,
})
i18n.activate('en')

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
            <I18nProvider i18n={i18n}>
                <QueryClientProvider client={queryClient}>
                    <BaseApp>
                        <PageComponent />
                    </BaseApp>
                </QueryClientProvider>
            </I18nProvider>
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
    const [lang, setLang] = React.useState(localStorage.getItem('lang') || 'en')

    const isTokenExsist = Boolean(localStorage.getItem('token'))
    const { data, isLoading, isError } = useAuth({ enabled: isTokenExsist })

    const globalContext = {
        state: {
            theme,
            lang,
            measure,
            user: data,
            isLoading,
            isAuthError: isError,
        },
        actions: { setTheme, setMeasure, setLang },
    }

    React.useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    React.useEffect(() => {
        localStorage.setItem('measure', measure)
    }, [measure])

    React.useEffect(() => {
        localStorage.setItem('lang', lang)
        i18n.activate(lang)
    }, [lang])

    return (
        <GlobalContext.Provider value={globalContext}>
            {children}
        </GlobalContext.Provider>
    )
}

export default App
