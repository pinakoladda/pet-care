import { PetFood } from './components/PetFood'
import { PetSymptoms } from './components/PetSymptoms'
import { PetTreatment } from './components/PetTreatment'
import { PetWeight } from './components/PetWeight'
import styles from './index.module.css'

export const PetMedicalInfo = ({ petId, name }) => {
    return (
        <main className={styles.petMedicalInfo}>
            <h3>Pet medical info:</h3>
            <div className={styles.container}>
                <PetWeight petId={petId} name={name} />
                <PetFood petId={petId} name={name} />
                {/* <PetSymptoms name={name} /> */}
            </div>
            <PetTreatment name={name} petId={petId} />
        </main>
    )
}
