import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { api } from '.'

const addMedicineFn = async ({
    petId,
    name,
    type,
    date,
    notes,
    recurrence,
}) => {
    const response = await api.post(`/medicine`, {
        petId,
        name,
        type,
        date,
        notes,
        recurrence,
    })
    return response.data
}

export const useAddMedicine = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationKey: ['addMedicine'],
        mutationFn: addMedicineFn,
        onSuccess: () => {
            queryClient.refetchQueries(['getMedicine'])
        },
    })
}

const getMedicine = async (petId) => {
    const response = await api.get(`/medicine/?petId=${petId}`)

    return response.data
}

export const useGetMedicine = (petId) => {
    return useQuery({
        queryKey: ['getMedicine', petId],
        queryFn: () => getMedicine(petId),
    })
}

const deleteMedicine = async (medicineId) => {
    const response = await api.delete(`/medicine/${medicineId}`)

    return response.data
}

export const useDeleteFood = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationKey: ['deleteMedicine'],
        mutationFn: deleteMedicine,
        onSuccess: () => {
            queryClient.refetchQueries(['getMedicine'])
        },
    })
}
