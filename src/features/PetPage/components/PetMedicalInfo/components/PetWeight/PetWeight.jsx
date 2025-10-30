import React from 'react'
import cn from 'classnames'
import { Button } from '@/components/Button'
import { usePetWeight } from '@/lib/api'
import { convertWeight } from '@/lib/helpers'
import styles from './index.module.css'
import { Loader } from '@/components/Loader'
import { PopupAddWeight } from '@/components/PopupAddWeight'
import { usePopupProps } from '@/hooks/usePopupProps'
import { PopupPreviousWeight } from '@/components/PopupPreviousWeight'

export const PetWeight = ({ name, petId }) => {
    const { data, isLoading } = usePetWeight(petId)

    const addWeightPopupProps = usePopupProps()
    const previousPopupProps = usePopupProps()

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

    return (
        <main className={styles.petWeight}>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <div>
                        {data?.weight?.weight ? (
                            <h4 className={styles.header}>
                                {name}'s weight is{' '}
                                {convertWeight(
                                    data?.weight?.weight,
                                    'kilograms'
                                )}{' '}
                                kg
                            </h4>
                        ) : (
                            <h4 className={styles.header}>
                                You can add {name}'s weight here
                            </h4>
                        )}
                        {weightDifference !== 0 && (
                            <p className={styles.paragraph}>
                                {weightDifference > 0 ? '+' : ''}
                                {weightDifference} kg since last measure
                            </p>
                        )}
                    </div>
                    <div className={styles.buttonContainer}>
                        <Button
                            className={cn(
                                styles.button,
                                styles.buttonTransparent
                            )}
                            onClick={previousPopupProps.onPopupOpen}
                            disabled={!data?.weight}
                        >
                            Previous values
                        </Button>
                        <Button
                            onClick={addWeightPopupProps.onPopupOpen}
                            className={styles.button}
                        >
                            Add weight +
                        </Button>
                    </div>
                    <PopupAddWeight petId={petId} {...addWeightPopupProps} />
                    <PopupPreviousWeight
                        name={name}
                        petId={petId}
                        data={data}
                        {...previousPopupProps}
                    />
                </>
            )}
        </main>
    )
}
