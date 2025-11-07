import { Button } from '@/components/Button'
import styles from './index.module.css'

export const PetTreatment = ({ name }) => {
    return (
        <main className={styles.petTreatment}>
            <h3 className={styles.header}>{name}'s treatment</h3>
            <section className={styles.sectionTreatment}>
                <h4 className={styles.subheading}>
                    Flea and tick preventative treatment
                </h4>
                <div className={styles.treatmentContainer}>
                    <p className={styles.paragraph}>Simparica for dogs 3 kg</p>
                    <p className={styles.paragraphDate}>07.11.2025</p>
                    <p className={styles.paragraph}>
                        1 tablet, chewed with pleasure
                    </p>
                </div>
                <div className={styles.treatmentContainer}>
                    <p className={styles.paragraph}>
                        Simparica Simparica Simparicafor dogs 3 kg
                    </p>
                    <p className={styles.paragraphDate}>29.12.2025</p>
                    <p className={styles.paragraph}>
                        1 tablet, chewed with pleasure, Lorem, ipsum dolor sit
                        amet consectetur adipisicing elit. Libero impedit
                        assumenda temporibus, quod vitae necessitatibus pariatur
                        quibusdam ab eligendi aliquam! Quod minus laboriosam
                        veritatis, praesentium cupiditate debitis blanditiis
                        rerum at.
                    </p>
                </div>
                <div className={styles.treatmentContainer}>
                    <p className={styles.paragraph}>Simparica for dogs 3 kg</p>
                    <p className={styles.paragraphDate}>07.11.2025</p>
                    <p className={styles.paragraph}>
                        1 tablet, chewed with pleasure
                    </p>
                </div>
                <div className={styles.buttonContainer}>
                    <Button className={styles.moreButton}>see more...</Button>
                    <Button className={styles.addButton}>
                        Add new treatment +
                    </Button>
                </div>
            </section>
            <section className={styles.sectionTreatment}>
                <h4 className={styles.subheading}>Antiparasite treatment</h4>
                <div className={styles.treatmentContainer}>
                    <p className={styles.paragraph}>
                        Simparica for dogs 3 kg 1 tablet, chewed with pleasure 1
                        tablet, chewed with pleasure1 tablet, chewed with
                        pleasure 1 tablet, chewed with pleasure
                    </p>
                    <p className={styles.paragraphDate}>07.11.2025</p>
                    <p className={styles.paragraph}>
                        1 tablet, chewed with pleasure 1 tablet, chewed with
                        pleasure 1 tablet, chewed with pleasure 1 tablet, chewed
                        with pleasure
                    </p>
                </div>
                <div className={styles.buttonContainer}>
                    <Button className={styles.moreButton}>see more...</Button>
                    <Button className={styles.addButton}>
                        Add new treatment +
                    </Button>
                </div>
            </section>
        </main>
    )
}
