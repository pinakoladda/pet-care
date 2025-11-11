import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { api } from '.'

const addPetFoodFn = async ({
    petId,
    name,
    type,
    startDate,
    comment,
    portionSize,
}) => {
    const response = await api.post(`/food`, {
        petId,
        name,
        type,
        startDate,
        comment,
        portionSize,
    })

    return response.data
}

export const useAddPetFood = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationKey: ['addFood'],
        mutationFn: addPetFoodFn,
        onSuccess: () => {
            queryClient.refetchQueries(['getPetFood'])
        },
    })
}

const getPetFood = async (petId) => {
    const response = await api.get(`/food/?petId=${petId}`)

    return response.data
}

export const usePetFood = (petId) => {
    return useQuery({
        queryKey: ['getPetFood', petId],
        queryFn: () => getPetFood(petId),
    })
}

const deleteFoodFn = async (foodId) => {
    const response = await api.delete(`/food/${foodId}`)

    return response.data
}

export const useDeleteFood = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationKey: ['deleteFood'],
        mutationFn: deleteFoodFn,
        onSuccess: () => {
            queryClient.refetchQueries(['getPetFood'])
        },
    })
}
