import { Button } from '@/components/Button'
import styles from './index.module.css'
import cn from 'classnames'

export const PetSymptoms = ({ name }) => {
    return (
        <main className={styles.petSymptoms}>
            <div>
                <h3 className={styles.header}>Add {name}'s today symptoms</h3>
                <ul className={styles.container}>
                    <p className={styles.paragraphDate}>21.09.2025</p>
                    <li className={styles.paragraph}>Farting all the time</li>
                    <li className={styles.paragraph}>Stomach-ache</li>
                </ul>
            </div>
            <div className={styles.buttonContainer}>
                <Button className={cn(styles.button, styles.buttonTransparent)}>
                    Symptoms history
                </Button>
                <Button className={styles.button}>Add symptom +</Button>
            </div>
        </main>
    )
}
