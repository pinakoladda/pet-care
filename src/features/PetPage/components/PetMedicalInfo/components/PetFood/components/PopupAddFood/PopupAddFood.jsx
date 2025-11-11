import { Popup } from '@/components/Popup'
import styles from './index.module.css'
import { Form } from '@/components/Form'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { RadioGroup } from '@/components/RadioGroup'
import React from 'react'
import { useAddFood } from '../../hooks/useAddFood'
import { ErrorMessage } from '@/components/ErrorMessage'

const OPTIONS = [
    { value: 'natural', text: 'Natural' },
    { value: 'dry', text: 'Dry Food' },
    { value: 'wet', text: 'Wet Food' },
]

export const PopupAddFood = ({ petId, ...props }) => {
    const { fields, onSubmit, errorMessage } = useAddFood({
        petId,
        onPopupClose: props.onPopupClose,
    })

    return (
        <Popup {...props}>
            <Form className={styles.form} onSubmit={onSubmit}>
                <h4 className={styles.header}>Add food:</h4>
                <div className={styles.radioContainer}>
                    <RadioGroup
                        options={OPTIONS}
                        name="food"
                        {...fields.foodType}
                        radioClassName={styles.radioClassName}
                    />
                </div>
                {fields.foodType.value === 'natural' && (
                    <div className={styles.container}>
                        <Input
                            label="Add food name:"
                            id="foodName"
                            name="foodName"
                            className={styles.input}
                            min={0}
                            {...fields.foodName}
                        />
                        <Input
                            label="Comment:"
                            id="natural"
                            name="natural"
                            className={styles.input}
                            {...fields.comment}
                        />
                        <Input
                            label="Date from:"
                            id="weightDate"
                            name="weightDate"
                            className={styles.input}
                            type="date"
                            {...fields.date}
                        />
                    </div>
                )}
                {(fields.foodType.value === 'dry' ||
                    fields.foodType.value === 'wet') && (
                    <div className={styles.container}>
                        <Input
                            label="Add food name:"
                            id="foodName"
                            name="foodName"
                            className={styles.input}
                            min={0}
                            {...fields.foodName}
                        />
                        <Input
                            label="Add daily portion value (grams):"
                            id="portion"
                            name="portion"
                            className={styles.input}
                            type="number"
                            min={0}
                            max={2000}
                            {...fields.portion}
                        />
                        <Input
                            label="Date from:"
                            id="weightDate"
                            name="weightDate"
                            className={styles.input}
                            type="date"
                            {...fields.date}
                        />
                    </div>
                )}
                <ErrorMessage errorMessage={errorMessage} />
                <Button className={styles.button} type="submit">
                    Save
                </Button>
            </Form>
        </Popup>
    )
}
