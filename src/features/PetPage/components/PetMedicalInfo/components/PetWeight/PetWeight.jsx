import { Button } from '@/components/Button'
import styles from './index.module.css'

export const PetWeight = () => {
    return (
        <main className={styles.petWeight}>
            <h4>Buddy's weight is 3 kg</h4>
            <p>+200 gr since last month</p>
            <div className={styles.container}>
                <Button>Previous values</Button>
                <Button>Add weight +</Button>
            </div>
        </main>
    )
}
