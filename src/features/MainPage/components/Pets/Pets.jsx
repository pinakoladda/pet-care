import { CirclePlus } from 'lucide-react'
import { PetCard } from './components/PetCard'
import { Button } from '@/components/Button'
import { useUserPets } from '@/lib/api'
import { Loader } from '@/components/Loader'
import styles from './index.module.css'

const PETS = [
    {
        name: 'Buddy',
        age: '8 years old',
        breed: 'Yorkshire',
    },
     {
        name: 'Pinkie  Cloudy',
        age: 'internal',
        breed: 'Unicorn',
    },
]

export const Pets = ({ ownerId }) => {
    const { data, isLoading } = useUserPets(ownerId);

    return (
        <section className={styles.pets}>
            <h4 className={styles.header}>My tails:</h4>
            {isLoading 
            ? <Loader />
            : <div className={styles.cardsContainer}>
                {data?.map(({ name, age, breed, _id }) => <PetCard key={_id} name={name} age={age} breed={breed} id={_id}/>)}
                <Button className={styles.addButton}>
                    <CirclePlus size={80} color='#c2c2c2' strokeWidth={1.25} />
                </Button>
            </div>
            }
        </section>

    )
}