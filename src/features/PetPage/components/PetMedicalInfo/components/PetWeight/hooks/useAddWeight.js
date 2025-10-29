import { useAddPetWeight } from '@/lib/api'
import { convertWeight, convertWeightToGrams } from '@/lib/helpers'
import { format } from 'date-fns'
import React from 'react'

export const useAddWeight = ({ petId }) => {
    const { mutateAsync: addPetWeightFn } = useAddPetWeight()
    const [visibleAddWeightPopup, setVisibleAddWeightPopup] =
        React.useState(false)
    const [currentWeight, setCurrentWeight] = React.useState('')
    const [measure, setMeasure] = React.useState('kilograms')
    const [date, setDate] = React.useState(format(new Date(), 'yyyy-MM-dd'))
    const [errorMessage, setErrorMessage] = React.useState()

    console.log(date)
    const onAddWeight = () => {
        setVisibleAddWeightPopup(true)
    }

    const onCloseAddWeight = () => {
        setVisibleAddWeightPopup(false)
    }

    const onAddWeightSubmit = (event) => {
        event.preventDefault()
        addPetWeightFn({
            petId: petId,
            weight: convertWeightToGrams(currentWeight, measure),
            date: date,
        })
            .then(() => {
                onCloseAddWeight()
                setCurrentWeight('')
                setDate('')
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

    const onMeasureChange = (event) => {
        setMeasure((value) => {
            const weightInG = convertWeightToGrams(currentWeight, value)
            const weight = convertWeight(weightInG, event.target.value)
            setCurrentWeight(weight)

            return event.target.value
        })
    }

    return {
        fields: {
            currentWeight: {
                value: currentWeight,
                onChange: onChange(setCurrentWeight),
            },
            measure: { value: measure, onChange: onMeasureChange },
            date: { value: date, onChange: onChange(setDate) },
        },
        onAddWeightSubmit,
        visibleAddWeightPopup,
        onAddWeight,
        onCloseAddWeight,
        errorMessage,
    }
}
