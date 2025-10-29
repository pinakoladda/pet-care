import { useDeleteWeight } from '@/lib/api'
import React from 'react'

export const usePrewiousWeight = () => {
    const [visiblePreviousPopup, setVisiblePreviousPopup] =
        React.useState(false)
    const { mutateAsync: deleteWeightFn } = useDeleteWeight()

    const onPreviousPopupOpen = () => {
        setVisiblePreviousPopup(true)
    }

    const onPreviousPopupClose = () => {
        setVisiblePreviousPopup(false)
    }

    const onDeleteWeight = (weightId) => () => {
        deleteWeightFn(weightId)
    }

    return {
        visiblePreviousPopup,
        onPreviousPopupOpen,
        onPreviousPopupClose,
        onDeleteWeight,
        deleteWeightFn,
    }
}
