import React from 'react'

export const DEFAULT_CONTEXT_STATE = {
    theme: 'light',
}

export const GlobalContext = React.createContext()

export const useGlobalContext = () => {
    const context = React.useContext(GlobalContext)
    return context
}
