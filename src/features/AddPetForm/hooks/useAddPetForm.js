import React from "react"
import { useCreatePet } from "@/lib/api"

export const useAddPetForm = ({ onPopupClose }) => {
    const { mutateAsync: createPetFn } = useCreatePet()
    const [name, setName] = React.useState('')
    const [birthDate, setBirthDate] = React.useState('')
    const [type, setType] = React.useState('')
    const [gender, setGender] = React.useState('')
    const [neutured, setNeutured] = React.useState('')
    const [breed, setBreed] = React.useState('')
    const [errorMessage, setErrorMessage] = React.useState()

    const onSubmit = (event) => {
        event.preventDefault()
        createPetFn({name, birthDate, type, gender, neutured: neutured === 'true' ? true : false, breed})
            .then(() => {
                onPopupClose()
                setName('')
                setBirthDate('')
                setType('')
                setNeutured('')
                setBreed('')
                setGender('')
                setErrorMessage('')
            })
            .catch((error) => {
                const errorData = error.response.data;
                if(errorData.details) {
                    setErrorMessage(errorData.details.map(({ message }) => message).join('\n'))
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
            name: {value: name, onChange: onChange(setName)},
            birthDate: {value: birthDate, onChange: onChange(setBirthDate)},
            type: {value: type, onChange: onChange(setType)},
            gender: {value: gender, onChange: onChange(setGender)},
            neutured: {value: neutured, onChange: onChange(setNeutured)},
            breed: {value: breed, onChange: onChange(setBreed)},
        },
        submitDisabled: !name || !type || !birthDate || !gender || !neutured || !breed,
        onSubmit,
        errorMessage
    }
}