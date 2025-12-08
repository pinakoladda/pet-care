import { useAddSymptom } from '@/lib/api/symptoms'
import { format } from 'date-fns'
import React from 'react'

export const useAddPetSymptom = ({ onPopupClose, petId, type }) => {
    const { mutateAsync: addSymptomFn } = useAddSymptom()
    const [symptom, setSymptom] = React.useState('')
    const [date, setDate] = React.useState(format(new Date(), 'yyyy-MM-dd'))
    const [errorMessage, setErrorMessage] = React.useState('')

    const onChange = (updateFn) => (event) => {
        updateFn(event.target.value)
        setErrorMessage('')
    }

    const onSubmit = (event) => {
        event.preventDefault()
        addSymptomFn({
            petId,
            type,
            text: symptom,
            date: date,
        })
            .then(() => {
                onPopupClose()
                setSymptom('')
                setDate(format(new Date(), 'yyyy-MM-dd'))
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

    return {
        fields: {
            symptom: { value: symptom, onChange: onChange(setSymptom) },
            date: { value: date, onChange: onChange(setDate) },
        },
        onSubmit,
        errorMessage,
        setSymptom,
    }
}
