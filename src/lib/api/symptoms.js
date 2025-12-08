import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { api } from '.'

const addSymptomFn = async ({ petId, text, date, type }) => {
    const response = await api.post(`/notes`, {
        petId,
        text,
        date,
        type,
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

const getSymptoms = async (petId, type) => {
    const response = await api.get(`/notes/?petId=${petId}&type=${type}`)

    return response.data
}

export const useSymptoms = (petId, type) => {
    return useQuery({
        queryKey: ['getSymptoms', petId, type],
        queryFn: () => getSymptoms(petId),
    })
}

const deleteSymptomFn = async (symptomId) => {
    const response = await api.delete(`/notes/${symptomId}`)

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
