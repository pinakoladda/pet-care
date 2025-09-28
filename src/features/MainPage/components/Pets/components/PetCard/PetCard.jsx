import { Avatar } from '@/components/Avatar'
import { Button } from '@/components/Button'
import styles from './index.module.css'

export const PetCard = ({name, age, breed}) => {
    return (
            <div className={styles.card}>
                <Avatar className={styles.petAvatar}/>
                <h2 className={styles.petName}>{name}</h2>
                <p className={styles.petInfo}>{age}</p>
                <p className={styles.petInfo}>{breed}</p>
                <Button className={styles.button}>see info</Button>
            </div>
    )
}