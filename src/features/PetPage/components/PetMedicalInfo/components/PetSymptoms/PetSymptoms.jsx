import { Button } from '@/components/Button'
import styles from './index.module.css'
import cn from 'classnames'
import { PopupAddSymptom } from './components/PopupAddSymptom'
import { usePopupProps } from '@/hooks/usePopupProps'
import { PopupSymptomsHistory } from './components/PopupSymptomsHistory'
import { useSymptoms } from '@/lib/api/symptoms'

export const PetSymptoms = ({ name, petId }) => {
    const popupAddSymptomProps = usePopupProps()
    const popupSymptomsHistoryProps = usePopupProps()

    const { data } = useSymptoms(petId)

    return (
        <main className={styles.petSymptoms}>
            <div>
                <h3 className={styles.header}>Add {name}'s today symptoms</h3>
                {data ? (
                    <ul className={styles.container}>
                        <p className={styles.paragraphDate}>21.09.2025</p>
                        <li className={styles.paragraph}>
                            Farting all the time
                        </li>
                    </ul>
                ) : (
                    <p className={styles.paragraph}>
                        How is {name} feeling today?
                    </p>
                )}
            </div>
            <div className={styles.buttonContainer}>
                <Button
                    onClick={popupSymptomsHistoryProps.onPopupOpen}
                    className={cn(styles.button, styles.buttonTransparent)}
                >
                    Symptoms history
                </Button>
                <Button
                    onClick={popupAddSymptomProps.onPopupOpen}
                    className={styles.button}
                >
                    Add symptom +
                </Button>
            </div>

            <PopupAddSymptom {...popupAddSymptomProps} petId={petId} />
            <PopupSymptomsHistory
                {...popupSymptomsHistoryProps}
                petId={petId}
            />
        </main>
    )
}
