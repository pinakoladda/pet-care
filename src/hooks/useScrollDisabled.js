import React from 'react'

export const useScrollDisabled = (disable) => {
    React.useEffect(() => {
        document.body.style.overflow = disable ? 'hidden' : 'visible'
    }, [disable])
}
