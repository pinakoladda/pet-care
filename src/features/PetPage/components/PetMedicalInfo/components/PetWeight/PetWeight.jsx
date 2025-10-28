import React from 'react'
import cn from 'classnames'
import { Button } from '@/components/Button'
import { Popup } from '@/components/Popup'
import { Input } from '@/components/Input'
import { Select } from '@/components/Select'
import { Form } from '@/components/Form'
import { useAddWeight } from './hooks/useAddWeight'
import { ErrorMessage } from '@/components/ErrorMessage'
import { usePetWeight } from '@/lib/api'
import styles from './index.module.css'
import { convertWeight } from '@/lib/helpers'

const OPTIONS = [
    { value: 'kilograms', text: 'kg' },
    { value: 'grams', text: 'g' },
    { value: 'pounds', text: 'lb' },
]

export const PetWeight = ({ name, petId }) => {
    const { data } = usePetWeight(petId)
    console.log(data)

    const {
        fields,
        onAddWeightSubmit,
        visibleAddWeightPopup,
        onAddWeight,
        onCloseAddWeight,
        errorMessage,
    } = useAddWeight({ petId })

    return (
        <main className={styles.petWeight}>
            <h4 className={styles.currentWeight}>
                {name}'s weight is{' '}
                {convertWeight(data?.weight.weight, 'kilograms')} kg
            </h4>
            <p className={styles.weightDifference}>+200 gr since last month</p>
            <div className={styles.buttonContainer}>
                <Button className={cn(styles.button, styles.buttonTransparent)}>
                    Previous values
                </Button>
                <Button onClick={onAddWeight} className={styles.button}>
                    Add weight +
                </Button>
            </div>
            <Popup
                visible={visibleAddWeightPopup}
                onPopupClose={onCloseAddWeight}
            >
                <Form onSubmit={onAddWeightSubmit}>
                    <div className={styles.popupContainer}>
                        <h4 className={styles.popupHeader}>Add weight:</h4>
                        <div className={styles.inputPopupContainer}>
                            <div className={styles.popupWeihtContainer}>
                                <Input
                                    id="current-weight"
                                    name="current-weight"
                                    className={styles.popupInput}
                                    {...fields.currentWeight}
                                    type="number"
                                    min={0}
                                />
                                <Select
                                    options={OPTIONS}
                                    className={styles.popupSelect}
                                    {...fields.measure}
                                />
                            </div>
                            <Input
                                id="weightDate"
                                name="weightDate"
                                className={styles.popupInputDate}
                                type="date"
                                {...fields.date}
                            />
                        </div>
                        <ErrorMessage errorMessage={errorMessage} />
                        <Button className={styles.button} type="submit">
                            Save
                        </Button>
                    </div>
                </Form>
            </Popup>
        </main>
    )
}
