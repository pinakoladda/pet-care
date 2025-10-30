import { Button } from '@/components/Button'
import cn from 'classnames'
import styles from './index.module.css'

export const PetFood = ({ name }) => {
    return (
        <main className={styles.petFood}>
            <div>
                <h3 className={styles.header}>{name}'s diet</h3>
                <div className={styles.container}>
                    <p className={styles.paragraph}>
                        Grandorf white fish adult mini
                    </p>
                    <p className={styles.paragraph}>daily portion: 50g</p>
                    <p className={styles.paragraph}>from: 20.07.2025</p>
                </div>
                <div className={styles.buttonContainer}>
                    <Button
                        className={cn(styles.button, styles.buttonTransparent)}
                    >
                        Previous foods
                    </Button>
                    <Button className={styles.button}>Add pet food +</Button>
                </div>
            </div>
        </main>
    )
}
