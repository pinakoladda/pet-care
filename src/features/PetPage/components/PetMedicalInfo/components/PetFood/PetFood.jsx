import { Button } from '@/components/Button'
import cn from 'classnames'
import styles from './index.module.css'
import { PopupAddFood } from './components/PopupAddFood'
import { usePopupProps } from '@/hooks/usePopupProps'
import { PopupPreviousFood } from './components/PopupPreviousFood'
import { usePetFood } from '@/lib/api/food'
import { format } from 'date-fns'

export const PetFood = ({ name, petId }) => {
    const addFoodPopupProps = usePopupProps()
    const previousFoodPopupProps = usePopupProps()
    const { data } = usePetFood(petId, name)

    return (
        <main className={styles.petFood}>
            <div>
                {data && data.length > 0 ? (
                    <>
                        <h3 className={styles.header}>{name}'s diet</h3>
                        <div className={styles.container}>
                            <p className={styles.paragraph}>
                                Type: {data[0].type} food
                            </p>
                            <p className={styles.paragraph}>{data[0].name}</p>
                            {data[0].portionSize ? (
                                <p className={styles.paragraph}>
                                    Daily portion: {data[0].portionSize} grams
                                </p>
                            ) : (
                                ''
                            )}
                            <p className={styles.paragraph}>
                                from: {format(data[0].startDate, 'yyyy-MM-dd')}
                            </p>
                        </div>
                    </>
                ) : (
                    <p className={styles.header}>
                        Add info about {name}'s diet
                    </p>
                )}
            </div>
            <div className={styles.buttonContainer}>
                <Button
                    className={cn(styles.button, styles.buttonTransparent)}
                    onClick={previousFoodPopupProps.onPopupOpen}
                    disabled={data?.length === 0}
                >
                    Previous foods
                </Button>
                <Button
                    className={styles.button}
                    onClick={addFoodPopupProps.onPopupOpen}
                >
                    Add pet food +
                </Button>
                <PopupAddFood {...addFoodPopupProps} petId={petId} />
                <PopupPreviousFood {...previousFoodPopupProps} data={data} />
            </div>
        </main>
    )
}
