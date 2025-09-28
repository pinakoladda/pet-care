import { CirclePlus } from 'lucide-react'
import { PetCard } from './components/PetCard'
import styles from './index.module.css'
import { Button } from '@/components/Button'

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

export const Pets = () => {
    return (
        <section className={styles.pets}>
            <h4 className={styles.header}>My tails:</h4>
            <div className={styles.cardsContainer}>
                {PETS.map(({name, age, breed}) => <PetCard name={name} age={age} breed={breed}/>)}
                <Button className={styles.addButton}>
                    <CirclePlus size={80} color='#c2c2c2' strokeWidth={1.25} />
                </Button>
            </div>
        </section>

    )
}