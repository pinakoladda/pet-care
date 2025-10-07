import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios"; 

const API_HOST = import.meta.env.VITE_API_HOST;

const getUserData = async () => {
    const response = await axios.get(`${API_HOST}/api/user/1`, {
        headers: {'X-Auth-Token': localStorage.getItem('token')}
    })

    return response.data;
}

export const useUserData = () => {
    return useQuery({
        queryKey: ['getUserData'],
        queryFn: getUserData,
    });
};

const getUserPets = async (ownerId) => {
    const response = await axios.get(`${API_HOST}/api/pet/?ownerId=${ownerId}`, {
        headers: {'X-Auth-Token': localStorage.getItem('token')}
    })

    return response.data
}

export const useUserPets = (ownerId) => {
    return useQuery({
        queryKey: ['getUserPets', ownerId],
        queryFn: () => getUserPets(ownerId),
    });
};

const getPetData = async (petId) => {
    const response = await axios.get(`${API_HOST}/api/pet/${petId}`, {
        headers: {'X-Auth-Token': localStorage.getItem('token')}
    })

    return response.data
}

export const usePetData = (petId) => {
    return useQuery({
        queryKey: ['getPetData', petId],
        queryFn: () => getPetData(petId),
    })
}

const loginFn = async ({ login, password }) => {
    const response = await axios.post(`${API_HOST}/api/login`, {login, password}, {
        headers: {'X-Auth-Token': localStorage.getItem('token')}
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
    const response = await axios.post(`${API_HOST}/api/register`, {name, email, login, password})

    return response.data
}

export const useRegistration = () => {
    return useMutation({
        mutationKey: ['registration'],
        mutationFn: registrationFn,
    })
}

const authFn = async () => {
    const response = await axios.get(`${API_HOST}/api/auth`, {
        headers: {'X-Auth-Token': localStorage.getItem('token')}
    })

    return response.data
}

export const useAuth = (props) => {
    return useQuery({
        queryKey: ['auth'],
        queryFn: authFn,
        retry: 0,
        ...props
    })
}