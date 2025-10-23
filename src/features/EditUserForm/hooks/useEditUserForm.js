import { usePatchUser } from '@/lib/api'
import React from 'react'

export const useEditUserForm = ({ onPopupClose, userData }) => {
    const { mutateAsync: patchUser, isPending } = usePatchUser()
    const [name, setName] = React.useState(userData?.name || '')
    const [gender, setGender] = React.useState(userData?.gender || '')
    const [email, setEmail] = React.useState(userData?.email || '')
    const [errorMessage, setErrorMessage] = React.useState()

    const onSubmit = (event) => {
        event.preventDefault()
        patchUser({ name, gender, userId: userData._id, email })
            .then(() => {
                onPopupClose()
            })
            .catch((error) => {
                const errorData = error.response.data
                if (errorData.details) {
                    setErrorMessage(
                        errorData.details
                            .map(({ message }) => message)
                            .join('\n')
                    )
                } else {
                    setErrorMessage(errorData.message)
                }
            })
    }

    const onChange = (updateFn) => (event) => {
        updateFn(event.target.value)
        setErrorMessage('')
    }

    return {
        fields: {
            name: { value: name, onChange: onChange(setName) },
            gender: { value: gender, onChange: onChange(setGender) },
            email: { value: email, onChange: onChange(setEmail) },
        },
        submitDisabled: !name || !gender || !email || errorMessage || isPending,
        onSubmit,
        errorMessage,
    }
}
