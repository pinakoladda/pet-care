import { format } from 'date-fns'
import React from 'react'

export const useAddFood = () => {
    const [foodType, setFoodType] = React.useState('dry food')
    const [foodName, setFoodName] = React.useState('')
    const [portion, setPortion] = React.useState('')
    const [natural, setNatural] = React.useState('')
    const [date, setDate] = React.useState(format(new Date(), 'yyyy-MM-dd'))

    const onSubmit = (event) => {
        event.preventDefault()
    }

    const onChange = (updateFn) => (event) => {
        updateFn(event.target.value)
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
            natural: { value: natural, onChange: onChange(setNatural) },
        },
        onSubmit,
    }
}
