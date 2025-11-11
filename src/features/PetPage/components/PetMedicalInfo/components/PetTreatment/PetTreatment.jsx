import { Button } from '@/components/Button'
import styles from './index.module.css'
import { PopupAddInsectsTreatment } from './components/PopupAddInsectsTreatment'
import { usePopupProps } from '@/hooks/usePopupProps'
import cn from 'classnames'

export const PetTreatment = ({ name, petId }) => {
    const addInsectsTreatmentPopupProps = usePopupProps()
    return (
        <main className={styles.petTreatment}>
            <h3 className={styles.header}>{name}'s treatment</h3>
            <section className={styles.sectionTreatment}>
                <h4 className={styles.subheading}>
                    Flea and tick preventative treatment
                </h4>
                <div className={styles.treatmentContainer}>
                    <p className={cn(styles.paragraph, styles.example)}>
                        Name of medicine
                    </p>
                    <p className={cn(styles.paragraphDate, styles.example)}>
                        Medication date
                    </p>
                    <p className={cn(styles.paragraphDate, styles.example)}>
                        Repeat date
                    </p>
                    <p className={cn(styles.paragraph, styles.example)}>
                        Notes
                    </p>
                </div>
                <div className={styles.treatmentContainer}>
                    <p className={styles.paragraph}>Simparica for dogs 3 kg</p>
                    <p className={styles.paragraphDate}>07.11.2025</p>
                    <p className={styles.paragraphDate}>07.11.2026</p>
                    <p className={styles.paragraph}>
                        1 tablet, chewed with pleasure
                    </p>
                </div>
                <div className={styles.buttonContainer}>
                    <Button className={styles.moreButton}>see more...</Button>
                    <Button
                        onClick={addInsectsTreatmentPopupProps.onPopupOpen}
                        className={styles.addButton}
                    >
                        Add new treatment +
                    </Button>
                </div>
                <PopupAddInsectsTreatment
                    petId={petId}
                    {...addInsectsTreatmentPopupProps}
                    type="insects"
                />
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
