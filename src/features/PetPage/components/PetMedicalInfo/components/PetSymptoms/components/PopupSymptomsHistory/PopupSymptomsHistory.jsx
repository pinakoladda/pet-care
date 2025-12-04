import { Popup } from '@/components/Popup'
import styles from './index.module.css'
import { Button } from '@/components/Button'

const SYMPTOMS = [
    {
        text: 'farting, farting, farting, farting, farting,farting',
        date: '18.09.2025',
    },
    { text: 'vomiting', date: '09.09.2025' },
    { text: 'dizzy', date: '01.12.2025' },
    { text: 'sick', date: '03.11.2025' },
]

export const PopupSymptomsHistory = ({ ...props }) => {
    return (
        <Popup {...props}>
            <main className={styles.main}>
                {SYMPTOMS.length > 0 ? (
                    <>
                        <h4 className={styles.header}>Symptoms history:</h4>
                        {SYMPTOMS.map((symptom) => {
                            return (
                                <section
                                    className={styles.container}
                                    key={symptom.text}
                                >
                                    <p className={styles.symptomName}>
                                        {symptom.text}
                                    </p>
                                    <p className={styles.paragraph}>
                                        {symptom.date}
                                    </p>
                                    <Button className={styles.deleteButton}>
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
