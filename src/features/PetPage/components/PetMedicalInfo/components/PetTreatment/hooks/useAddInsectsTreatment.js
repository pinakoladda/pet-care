import React from 'react'

export const useAddInsectsTreatment = () => {
    const [medicine, setMedicine] = React.useState('')

    const onChange = (updateFn) => (event) => {
        updateFn(event.target.value)
    }

    return {
        fields: {
            medicine: { value: medicine, onChange: onChange(setMedicine) },
        },
    }
}
