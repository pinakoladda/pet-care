import { Avatar } from '@/components/Avatar'
import { Button } from '@/components/Button'
import styles from './index.module.css'

export const PetCard = ({ name, age, breed, id }) => {
    return (
            <div className={styles.card}>
                <Avatar className={styles.petAvatar}/>
                <h3 className={styles.petName}>{name}</h3>
                <p className={styles.petInfo}>{age}</p>
                <p className={styles.petInfo}>{breed}</p>
                <Button as='a' href={`/pet/${id}`} className={styles.button}>see info</Button>
            </div>
    )
}