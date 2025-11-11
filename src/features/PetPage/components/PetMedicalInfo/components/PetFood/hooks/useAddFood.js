import { useAddPetFood } from '@/lib/api/food'
import { format } from 'date-fns'
import React from 'react'

export const useAddFood = ({ petId, onPopupClose }) => {
    const { mutateAsync: addPetFoodFn } = useAddPetFood()
    const [foodType, setFoodType] = React.useState('dry')
    const [foodName, setFoodName] = React.useState('')
    const [portion, setPortion] = React.useState('')
    const [comment, setComment] = React.useState('')
    const [date, setDate] = React.useState(format(new Date(), 'yyyy-MM-dd'))
    const [errorMessage, setErrorMessage] = React.useState('')

    const onSubmit = (event) => {
        event.preventDefault()
        const data = {
            petId,
            name: foodName,
            type: foodType,
            startDate: date,
        }
        if (comment) {
            data.comment = comment
        }
        if (portion) {
            data.portionSize = Number(portion)
        }
        addPetFoodFn(data)
            .then(() => {
                onPopupClose()
                setFoodType('dry')
                setFoodName('')
                setPortion('')
                setComment('')
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

    const onChange = (updateFn) => (event) => {
        updateFn(event.target.value)
        setErrorMessage('')
    }

    return {
        fields: {
            foodType: {
                value: foodType,
                onChange: onChange(setFoodType),
            },
            foodName: { value: foodName, onChange: onChange(setFoodName) },
            portion: { value: portion, onChange: onChange(setPortion) },
            date: { value: date, onChange: onChange(setDate) },
            comment: { value: comment, onChange: onChange(setComment) },
        },
        onSubmit,
        errorMessage,
    }
}
