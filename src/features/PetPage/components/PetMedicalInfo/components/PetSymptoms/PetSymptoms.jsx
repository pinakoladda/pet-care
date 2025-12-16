import { Button } from '@/components/Button'
import styles from './index.module.css'
import cn from 'classnames'
import { PopupAddSymptom } from './components/PopupAddSymptom'
import { usePopupProps } from '@/hooks/usePopupProps'
import { PopupSymptomsHistory } from './components/PopupSymptomsHistory'
import { useSymptoms } from '@/lib/api/symptoms'
import { format } from 'date-fns'

export const PetSymptoms = ({ name, petId }) => {
    const popupAddSymptomProps = usePopupProps()
    const popupSymptomsHistoryProps = usePopupProps()
    const type = 'symptoms'

    const { data } = useSymptoms(petId, type)

    return (
        <main className={styles.petSymptoms}>
            <div>
                <h3 className={styles.header}>Add {name}'s today symptoms</h3>
                {data?.length > 0 ? (
                    <ul className={styles.container}>
                        <p className={styles.paragraphDate}>
                            {format(data[0].date, 'yyyy-MM-dd')}
                        </p>
                        <li className={styles.symptom}>{data[0].text}</li>
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

            <PopupAddSymptom
                {...popupAddSymptomProps}
                petId={petId}
                type={type}
            />
            <PopupSymptomsHistory
                {...popupSymptomsHistoryProps}
                petId={petId}
                data={data}
            />
        </main>
    )
}
