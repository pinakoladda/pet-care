import { Popup } from '@/components/Popup'
import styles from './index.module.css'
import { Button } from '@/components/Button'
import { format } from 'date-fns'
import { useSymptomsHistory } from '../../hooks/useSymptomsHistory'

export const PopupSymptomsHistory = ({ data, ...props }) => {
    const { onDeleteSymptom } = useSymptomsHistory()
    return (
        <Popup {...props}>
            <main className={styles.main}>
                {data?.length > 0 ? (
                    <>
                        <h4 className={styles.header}>Symptoms history:</h4>
                        {data?.map((symptom) => {
                            return (
                                <section
                                    className={styles.container}
                                    key={symptom._id}
                                >
                                    <p className={styles.symptomName}>
                                        {symptom.text}
                                    </p>
                                    <p className={styles.paragraph}>
                                        {format(symptom.date, 'MM.dd.yyyy')}
                                    </p>
                                    <Button
                                        className={styles.deleteButton}
                                        onClick={onDeleteSymptom(symptom._id)}
                                    >
                                        Delete
                                    </Button>
                                </section>
                            )
                        })}
                    </>
                ) : (
                    <h4 className={styles.header}>Symptoms history is empty</h4>
                )}
            </main>
        </Popup>
    )
}
