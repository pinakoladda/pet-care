import { Popup } from '@/components/Popup'
import styles from './index.module.css'
import { Form } from '@/components/Form'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { RadioGroup } from '@/components/RadioGroup'
import React from 'react'
import { useAddFood } from '../../hooks/useAddFood'

const OPTIONS = [
    { value: 'natural', text: 'Natural' },
    { value: 'dry food', text: 'Dry Food' },
    { value: 'wet food', text: 'Wet Food' },
]

export const PopupAddFood = ({ ...props }) => {
    const { fields, onSubmit } = useAddFood()

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
                            {...fields.natural}
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
                {(fields.foodType.value === 'dry food' ||
                    fields.foodType.value === 'wet food') && (
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
                <Button className={styles.button} type="submit">
                    Save
                </Button>
            </Form>
        </Popup>
    )
}
