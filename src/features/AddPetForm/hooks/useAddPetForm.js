import React from 'react'
import { usePetBreeds } from '@/lib/api'
import { useDebounce } from '@uidotdev/usehooks'
import { formatDate } from '@/lib/helpers'

export const useAddPetForm = ({
    onPopupClose,
    defaultValues,
    apiFn,
    petId,
}) => {
    const defaultNeutured = defaultValues?.neutured ? 'true' : 'false'
    const [name, setName] = React.useState(defaultValues?.name || '')
    const [birthDate, setBirthDate] = React.useState(
        defaultValues?.birthDate ? formatDate(defaultValues.birthDate) : ''
    )
    const [type, setType] = React.useState(defaultValues?.type || '')
    const [gender, setGender] = React.useState(defaultValues?.gender || '')
    const [neutured, setNeutured] = React.useState(defaultNeutured)
    const [breed, setBreed] = React.useState(defaultValues?.breed || '')
    const [errorMessage, setErrorMessage] = React.useState()

    const onSubmit = (event) => {
        event.preventDefault()
        apiFn({
            name,
            birthDate,
            type,
            gender,
            neutured: neutured === 'true' ? true : false,
            breed,
            petId,
        })
            .then(() => {
                onPopupClose()
                if (!petId) {
                    setName('')
                    setBirthDate('')
                    setType('')
                    setNeutured('')
                    setBreed('')
                    setGender('')
                    setErrorMessage('')
                }
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

    const debouncedBreed = useDebounce(breed, 300)
    const { data = [], isLoading } = usePetBreeds(type, debouncedBreed)
    const options = data.length === 0 ? ['Other'] : data

    return {
        fields: {
            name: { value: name, onChange: onChange(setName) },
            birthDate: { value: birthDate, onChange: onChange(setBirthDate) },
            type: { value: type, onChange: onChange(setType) },
            gender: { value: gender, onChange: onChange(setGender) },
            neutured: { value: neutured, onChange: onChange(setNeutured) },
            breed: {
                value: breed,
                onChange: onChange(setBreed),
                options,
                isLoading,
            },
        },
        submitDisabled:
            !name || !type || !birthDate || !gender || !neutured || !breed,
        onSubmit,
        errorMessage,
    }
}
