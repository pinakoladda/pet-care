import { useAddMedicine } from '@/lib/api/medicine'
import { format } from 'date-fns'
import React from 'react'

export const useAddVormsTreatment = ({ petId, type, onPopupClose }) => {
    const { mutateAsync: addMedicineFn } = useAddMedicine()
    const [medicine, setMedicine] = React.useState('')
    const [date, setDate] = React.useState(format(new Date(), 'yyyy-MM-dd'))
    const [repeat, setRepeat] = React.useState('once')
    const [repeatValue, setRepeatValue] = React.useState('')
    const [notes, setNotes] = React.useState('')
    const [errorMessage, setErrorMessage] = React.useState('')

    const getRecurrenceValue = () => {
        if (repeat === 'once') {
            return repeat
        }
        if (repeat !== 'once') {
            return repeatValue + '_' + repeat
        }
    }

    const onChange = (updateFn) => (event) => {
        updateFn(event.target.value)
        setErrorMessage('')
    }

    const onSubmit = (event) => {
        event.preventDefault('')
        addMedicineFn({
            petId: petId,
            name: medicine,
            type: type,
            date: date,
            recurrence: getRecurrenceValue(),
            notes: notes,
        })
            .then(() => {
                onPopupClose()
                setMedicine('')
                setDate('')
                setRepeat('')
                setRepeatValue('')
                setNotes('')
                setErrorMessage('')
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
            medicine: { value: medicine, onChange: onChange(setMedicine) },
            date: { value: date, onChange: onChange(setDate) },
            repeat: { value: repeat, onChange: onChange(setRepeat) },
            notes: { value: notes, onChange: onChange(setNotes) },
            repeatValue: {
                value: repeatValue,
                onChange: onChange(setRepeatValue),
            },
        },
        onSubmit,
        errorMessage,
    }
}
