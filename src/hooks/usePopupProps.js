import React from 'react'

export const usePopupProps = () => {
    const [visible, setVisible] = React.useState(false)
    const onPopupClose = () => {
        setVisible(false)
    }
    const onPopupOpen = () => {
        setVisible(true)
    }
    return { visible, onPopupClose, onPopupOpen }
}
