import { useDeleteSymptom } from '@/lib/api/symptoms'

export const useSymptomsHistory = () => {
    const { mutateAsync: deleteSymptomFn } = useDeleteSymptom()

    const onDeleteSymptom = (symptomId) => () => {
        deleteSymptomFn(symptomId)
    }

    return { onDeleteSymptom }
}
