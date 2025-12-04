import { format } from 'date-fns'
import React from 'react'

export const useAddPetSymptom = ({ onPopupClose }) => {
    const [symptom, setSymptom] = React.useState('')
    const [date, setDate] = React.useState(format(new Date(), 'yyyy-MM-dd'))

    const onChange = (updateFn) => (event) => {
        updateFn(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        onPopupClose()
    }

    return {
        fields: {
            symptom: { value: symptom, onChange: onChange(setSymptom) },
            date: { value: date, onChange: onChange(setDate) },
        },
        onSubmit,
    }
}
