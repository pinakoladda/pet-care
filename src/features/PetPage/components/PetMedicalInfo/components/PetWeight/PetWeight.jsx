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
import { convertWeight } from '@/lib/helpers'
import { usePrewiousWeight } from './hooks/usePreviousWeight'
import { format } from 'date-fns'
import styles from './index.module.css'

const OPTIONS = [
    { value: 'kilograms', text: 'kg' },
    { value: 'grams', text: 'g' },
    { value: 'pounds', text: 'lb' },
]

export const PetWeight = ({ name, petId }) => {
    const { data } = usePetWeight(petId)
    console.log(data)

    const weightDifference = React.useMemo(() => {
        const weightHistory = data?.history

        if (!weightHistory || weightHistory.length < 2) {
            return 0
        }

        const lastValue = weightHistory[0].weight
        const preLastValue = weightHistory[1].weight

        const weightDifference = lastValue - preLastValue

        return convertWeight(weightDifference, 'kilograms')
    }, [data])

    const {
        fields,
        onAddWeightSubmit,
        visibleAddWeightPopup,
        onAddWeight,
        onCloseAddWeight,
        errorMessage,
    } = useAddWeight({ petId })

    const {
        visiblePreviousPopup,
        onPreviousPopupOpen,
        onPreviousPopupClose,
        onDeleteWeight,
    } = usePrewiousWeight(petId)

    return (
        <main className={styles.petWeight}>
            {data?.weight?.weight ? (
                <h4 className={styles.currentWeight}>
                    {name}'s weight is{' '}
                    {convertWeight(data?.weight?.weight, 'kilograms')} kg
                </h4>
            ) : (
                <h4 className={styles.currentWeight}>
                    You can add {name}'s weight here
                </h4>
            )}
            {weightDifference !== 0 && (
                <p className={styles.weightDifference}>
                    {weightDifference} kg since last measure
                </p>
            )}
            <div className={styles.buttonContainer}>
                <Button
                    className={cn(styles.button, styles.buttonTransparent)}
                    onClick={onPreviousPopupOpen}
                    disabled={!data?.weight}
                >
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
                        <h4 className={styles.popupHeaderAddWeight}>
                            Add weight:
                        </h4>
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
            <Popup
                visible={visiblePreviousPopup}
                onPopupClose={onPreviousPopupClose}
            >
                <div className={styles.popupPreviousContainer}>
                    {data?.weight ? (
                        <h4 className={styles.popupHeader}>Previous values:</h4>
                    ) : (
                        <h4 className={styles.popupHeaderEmpty}>
                            {name} doesn't have weight history
                        </h4>
                    )}
                    {data?.history.map((item) => {
                        return (
                            <div
                                className={styles.popupPreviousWeight}
                                key={item._id}
                            >
                                <p className={styles.popupParagraph}>
                                    {convertWeight(item.weight, 'kilograms')} kg
                                </p>
                                <p className={styles.popupParagraph}>
                                    {format(item.date, 'dd/MM/yyyy')}
                                </p>
                                <Button
                                    onClick={onDeleteWeight(item._id)}
                                    className={styles.popupDeleteButton}
                                >
                                    Delete
                                </Button>
                            </div>
                        )
                    })}
                </div>
            </Popup>
        </main>
    )
}
