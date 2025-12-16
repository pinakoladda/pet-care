import { Popup } from '@/components/Popup'
import { format } from 'date-fns'
import { Button } from '@/components/Button'
import styles from './index.module.css'
import { useDeleteFood } from '@/lib/api/food'

export const PopupPreviousFood = ({ data, ...props }) => {
    const { mutateAsync: deleteFoodFn } = useDeleteFood()

    const onDeleteFood = (foodId) => {
        deleteFoodFn(foodId)
    }

    return (
        <Popup {...props}>
            {data && data.length > 0 ? (
                <div className={styles.container}>
                    <h4 className={styles.header}>Food values history:</h4>
                    {data?.map((item) => {
                        return (
                            <section
                                key={item._id}
                                className={styles.sectionFood}
                            >
                                <p className={styles.foodName}>{item.name}</p>
                                <p className={styles.paragraph}>
                                    {format(item.startDate, 'dd.MM.yyyy')}
                                </p>
                                <p className={styles.comment}>
                                    {item.comment
                                        ? item.comment
                                        : item.portionSize + ' grams'}
                                </p>
                                <Button
                                    className={styles.deleteButton}
                                    onClick={() => onDeleteFood(item._id)}
                                >
                                    Delete
                                </Button>
                            </section>
                        )
                    })}
                </div>
            ) : (
                <div className={styles.container}>
                    <h4 className={styles.headerEmpty}>No history</h4>
                </div>
            )}
        </Popup>
    )
}
