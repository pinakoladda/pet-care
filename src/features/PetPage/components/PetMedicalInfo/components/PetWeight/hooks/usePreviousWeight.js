import { useDeleteWeight } from '@/lib/api'

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
