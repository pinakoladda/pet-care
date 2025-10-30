import { usePrewiousWeight } from '@/features/PetPage/components/PetMedicalInfo/components/PetWeight/hooks/usePreviousWeight'
import { Button } from '../Button'
import { Popup } from '../Popup'
import { convertWeight } from '@/lib/helpers'
import { format } from 'date-fns'
import styles from './index.module.css'

export const PopupPreviousWeight = ({ data, name, ...props }) => {
    const { onDeleteWeight } = usePrewiousWeight()
    return (
        <Popup {...props}>
            <div className={styles.container}>
                {data?.weight ? (
                    <h4 className={styles.header}>Previous values:</h4>
                ) : (
                    <h4 className={styles.headerEmpty}>
                        {name} doesn't have weight history
                    </h4>
                )}
                {data?.history.map((item) => {
                    return (
                        <section
                            className={styles.sectionWeight}
                            key={item._id}
                        >
                            <p className={styles.paragraph}>
                                {convertWeight(item.weight, 'kilograms')} kg
                            </p>
                            <p className={styles.paragraph}>
                                {format(item.date, 'dd/MM/yyyy')}
                            </p>
                            <Button
                                onClick={onDeleteWeight(item._id)}
                                className={styles.deleteButton}
                            >
                                Delete
                            </Button>
                        </section>
                    )
                })}
            </div>
        </Popup>
    )
}
