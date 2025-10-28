import { PetWeight } from './components/PetWeight'
import styles from './index.module.css'

export const PetMedicalInfo = ({ petId, name }) => {
    return (
        <main className={styles.petMedicalInfo}>
            <h3>Pet medical info:</h3>
            <PetWeight petId={petId} name={name} />
        </main>
    )
}
