import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios, { Axios } from 'axios'

const API_HOST = import.meta.env.VITE_API_HOST

const api = axios.create({
    headers: { 'X-Auth-Token': localStorage.getItem('token') },
    baseURL: `${API_HOST}/api`,
})

const getUserData = async () => {
    const response = await api.get('/user/1')

    return response.data
}

export const useUserData = () => {
    return useQuery({
        queryKey: ['getUserData'],
        queryFn: getUserData,
    })
}

const getUserPets = async (ownerId) => {
    const response = await api.get(`/pet/?ownerId=${ownerId}`)

    return response.data
}

export const useUserPets = (ownerId) => {
    return useQuery({
        queryKey: ['getUserPets', ownerId],
        queryFn: () => getUserPets(ownerId),
        enabled: !!ownerId,
    })
}

const getPetData = async (petId) => {
    const response = await api.get(`/pet/${petId}`)

    return response.data
}

export const usePetData = (petId) => {
    return useQuery({
        queryKey: ['getPetData', petId],
        queryFn: () => getPetData(petId),
    })
}

const loginFn = async ({ login, password }) => {
    const response = await axios.post(`${API_HOST}/api/login`, {
        login,
        password,
    })

    return response.data
}

export const useLogin = () => {
    return useMutation({
        mutationKey: ['login'],
        mutationFn: loginFn,
    })
}

const registrationFn = async ({ name, email, login, password }) => {
    const response = await axios.post(`${API_HOST}/api/register`, {
        name,
        email,
        login,
        password,
    })

    return response.data
}

export const useRegistration = () => {
    return useMutation({
        mutationKey: ['registration'],
        mutationFn: registrationFn,
    })
}

const authFn = async () => {
    const response = await api.get('/auth')

    return response.data
}

export const useAuth = (props) => {
    return useQuery({
        queryKey: ['auth'],
        queryFn: authFn,
        retry: 0,
        ...props,
    })
}

const createPetFn = async ({
    name,
    type,
    gender,
    breed,
    birthDate,
    neutured,
}) => {
    const response = await api.post('/pet', {
        name,
        type,
        gender,
        breed,
        birthDate,
        neutured,
    })

    return response.data
}

export const useCreatePet = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationKey: ['createPet'],
        mutationFn: createPetFn,
        onSuccess: () => {
            queryClient.refetchQueries(['getPetData'])
        },
    })
}

const deletePetFn = async (petId) => {
    const response = await api.delete(`/pet/${petId}`)

    return response.data
}

export const useDeletePet = () => {
    return useMutation({
        mutationKey: ['deletePet'],
        mutationFn: deletePetFn,
    })
}

const getPetBreeds = async (type, q) => {
    const response = await api.get(`/data/breeds?type=${type}&q=${q}`)

    return response.data
}

export const usePetBreeds = (type, q) => {
    return useQuery({
        queryKey: ['getPetBreeds', type, q],
        queryFn: () => getPetBreeds(type, q),
        enabled: Boolean(type),
    })
}

const patchPetFn = async ({ petId, ...data }) => {
    const response = await api.patch(`/pet/${petId}`, data)

    return response.data
}

export const usePatchPet = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationKey: ['patchPet'],
        mutationFn: patchPetFn,
        onSuccess: () => {
            queryClient.refetchQueries(['getPetData'])
        },
    })
}

const patchUserFn = async ({ userId, ...data }) => {
    const response = await api.patch(`/user/${userId}`, data)

    return response.data
}

export const usePatchUser = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationKey: ['patchUser'],
        mutationFn: patchUserFn,
        onSuccess: () => {
            queryClient.refetchQueries(['auth'])
        },
    })
}
