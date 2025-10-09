import { CirclePlus } from 'lucide-react'
import { PetCard } from './components/PetCard'
import { Button } from '@/components/Button'
import { useUserPets } from '@/lib/api'
import { Loader } from '@/components/Loader'
import styles from './index.module.css'

export const Pets = ({ ownerId, onAddPet }) => {
    const { data, isLoading } = useUserPets(ownerId);

    return (
        <section className={styles.pets}>
            <h4 className={styles.header}>My tails:</h4>
            {isLoading 
            ? <Loader />
            : <div className={styles.cardsContainer}>
                {data?.map(({ name, age, breed, _id }) => <PetCard key={_id} name={name} age={age} breed={breed} id={_id}/>)}
                <Button onClick={onAddPet} className={styles.addButton}>
                    <CirclePlus size={80} color='#c2c2c2' strokeWidth={1} />
                </Button>
            </div>
            }
        </section>

    )
}