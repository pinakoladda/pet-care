import { Popup } from '@/components/Popup'
import styles from './index.module.css'
import { format } from 'date-fns'
import { Button } from '@/components/Button'

export const PopupPreviousFood = ({ ...props }) => {
    return (
        <Popup {...props}>
            <div className={styles.container}>
                <h4 className={styles.header}>
                    History of the previous food values:
                </h4>
                <section className={styles.sectionFood}>
                    <p className={styles.foodName}>
                        Grandorf white fish adult mini
                    </p>
                    <p className={styles.paragraph}>
                        {format(new Date(), 'yyyy-MM-dd')}
                    </p>
                    <Button className={styles.deleteButton}>Delete</Button>
                </section>
                <section className={styles.sectionFood}>
                    <p className={styles.foodName}>
                        Chiken breast, eggs, strawberry
                    </p>
                    <p className={styles.paragraph}>
                        {format(new Date(), 'yyyy-MM-dd')}
                    </p>
                    <Button className={styles.deleteButton}>Delete</Button>
                </section>
                <section className={styles.sectionFood}>
                    <p className={styles.foodName}>
                        Grandorf white fish adult mini Grandorf white fish adult
                        mini Grandorf white fish adult mini
                    </p>
                    <p className={styles.paragraph}>
                        {format(new Date(), 'yyyy-MM-dd')}
                    </p>
                    <Button className={styles.deleteButton}>Delete</Button>
                </section>
            </div>
        </Popup>
    )
}
