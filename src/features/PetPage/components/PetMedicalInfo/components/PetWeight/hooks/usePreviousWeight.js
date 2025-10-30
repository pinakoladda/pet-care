import { useDeleteWeight } from '@/lib/api'
import React from 'react'

export const usePrewiousWeight = () => {
    const { mutateAsync: deleteWeightFn } = useDeleteWeight()

    const onDeleteWeight = (weightId) => () => {
        deleteWeightFn(weightId)
    }

    return {
        onDeleteWeight,
        deleteWeightFn,
    }
}
