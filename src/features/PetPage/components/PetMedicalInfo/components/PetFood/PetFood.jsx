import { Button } from '@/components/Button'
import cn from 'classnames'
import styles from './index.module.css'
import { PopupAddFood } from './components/PopupAddFood'
import { usePopupProps } from '@/hooks/usePopupProps'
import { PopupPreviousFood } from './components/PopupPreviousFood'

export const PetFood = ({ name }) => {
    const addFoodPopupProps = usePopupProps()
    const previousFoodPopupProps = usePopupProps()

    return (
        <main className={styles.petFood}>
            <div>
                <h3 className={styles.header}>{name}'s diet</h3>
                <div className={styles.container}>
                    <p className={styles.paragraph}>Type: dry food</p>
                    <p className={styles.paragraph}>
                        Grandorf white fish adult mini
                    </p>
                    <p className={styles.paragraph}>daily portion: 50g</p>
                    <p className={styles.paragraph}>from: 20.07.2025</p>
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <Button
                    className={cn(styles.button, styles.buttonTransparent)}
                    onClick={previousFoodPopupProps.onPopupOpen}
                >
                    Previous foods
                </Button>
                <Button
                    className={styles.button}
                    onClick={addFoodPopupProps.onPopupOpen}
                >
                    Add pet food +
                </Button>
                <PopupAddFood {...addFoodPopupProps} />
                <PopupPreviousFood {...previousFoodPopupProps} />
            </div>
        </main>
    )
}
