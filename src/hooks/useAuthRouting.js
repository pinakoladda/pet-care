import { useGlobalContext } from '@/contexts/GlobalContext'
import React from 'react'

export const useAuthRouting = () => {
    const {
        state: { isAuthError },
    } = useGlobalContext()

    React.useEffect(() => {
        const isTokenExsist = Boolean(localStorage.getItem('token'))

        if (isAuthError) {
            localStorage.removeItem('token')
        }
        if (!isTokenExsist || isAuthError) {
            window.location.href = '/login'
        }
    }, [isAuthError])
}
