import { useQuery } from "@tanstack/react-query";
import axios from "axios"; 

const API_HOST = import.meta.env.VITE_API_HOST;

const getUserData = async () => {
    const response = await axios.get(`${API_HOST}/api/user/1`)

    return response.data;
}

export const useUserData = () => {
    return useQuery({
        queryKey: ['getUserData'],
        queryFn: getUserData,
    });
};

const getUserPets = async (ownerId) => {
    const response = await axios.get(`${API_HOST}/api/pet/?ownerId=${ownerId}`)

    return response.data
}

export const useUserPets = (ownerId) => {
    return useQuery({
        queryKey: ['getUserPets', ownerId],
        queryFn: () => getUserPets(ownerId),
    });
};

const getPetData = async (petId) => {
    const response = await axios.get(`${API_HOST}/api/pet/${petId}`)

    return response.data
}

export const usePetData = (petId) => {
    return useQuery({
        queryKey: ['getPetData', petId],
        queryFn: () => getPetData(petId),
    })
}