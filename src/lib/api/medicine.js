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

const getMedicinesFn = async (petId) => {
    const response = await api.get(`/medicine/?petId=${petId}`)

    return response.data
}

export const useGetMedicines = (petId) => {
    return useQuery({
        queryKey: ['getMedicine', petId],
        queryFn: () => getMedicinesFn(petId),
    })
}

const deleteMedicine = async (medicineId) => {
    const response = await api.delete(`/medicine/${medicineId}`)

    return response.data
}

export const useDeleteMedicine = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationKey: ['deleteMedicine'],
        mutationFn: deleteMedicine,
        onSuccess: () => {
            queryClient.refetchQueries(['getMedicine'])
        },
    })
}

const getEvents = async () => {
    const response = await api.get(`/medicine/events/`)

    return response.data
}

export const useGetEvents = () => {
    return useQuery({
        queryKey: ['getEvents'],
        queryFn: () => getEvents(),
    })
}

const addMedicineDateFn = async ({ medicineId, date }) => {
    const response = await api.post(`/medicine/${medicineId}`, { date })

    return response.data
}

export const useAddMedicineDate = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationKey: ['addMedicineDate'],
        mutationFn: addMedicineDateFn,
        onSuccess: () => {
            queryClient.refetchQueries(['getEvents'])
        },
    })
}
