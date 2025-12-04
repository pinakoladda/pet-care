import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { api } from '.'

const addSymptomFn = async ({ petId, symptom, date }) => {
    const response = await api.post(`/symptoms`, {
        petId,
        symptom,
        date,
    })

    return response.data
}

export const useAddSymptom = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationKey: ['addSymptom'],
        mutationFn: addSymptomFn,
        onSuccess: () => {
            queryClient.refetchQueries(['getSymptoms'])
        },
    })
}

const getSymptoms = async (petId) => {
    const response = await api.get(`/symptoms/?petId=${petId}`)

    return response.data
}

export const useSymptoms = (petId) => {
    return useQuery({
        queryKey: ['getSymptoms', petId],
        queryFn: () => getSymptoms(petId),
    })
}

const deleteSymptomFn = async (symptomId) => {
    const response = await api.delete(`/symptoms/${symptomId}`)

    return response.data
}

export const useDeleteSymptom = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationKey: ['deleteSymptom'],
        mutationFn: deleteSymptomFn,
        onSuccess: () => {
            queryClient.refetchQueries(['getSymptoms'])
        },
    })
}
