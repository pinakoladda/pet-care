import { api } from '.'
import { useMutation } from '@tanstack/react-query'

const uploadAvatarFn = async (image) => {
    const formData = new FormData()
    formData.append('image', image)

    const response = await api.post(`/images`, formData)

    return response.data
}

export const useUploadAvatar = () => {
    return useMutation({
        mutationKey: ['uploadAvatar'],
        mutationFn: uploadAvatarFn,
    })
}
