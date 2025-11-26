import React from 'react'
import { Button } from '@/components/Button'
import { usePopupProps } from '@/hooks/usePopupProps'
import { format } from 'date-fns'
import { X } from 'lucide-react'
import { useDeleteMedicine } from '@/lib/api/medicine'
import cn from 'classnames'
import styles from './index.module.css'
import { PopupAddTreatment } from '../PopupAddTreatment'

export const TreatmentSection = ({ data, petId, type, header }) => {
    const { mutateAsync: deleteMedicineFn } = useDeleteMedicine()
    const addTreatmentPopupProps = usePopupProps()
    const [expanded, setExpanded] = React.useState(false)

    const toggleClick = () => {
        setExpanded((v) => !v)
    }

    const onMedicineDelete = (medicineId, date) => () => {
        deleteMedicineFn({ medicineId, date })
    }

    return (
        <section className={styles.sectionTreatment}>
            <h4 className={styles.header}>{header}</h4>
            {data && data.length > 0 ? (
                <>
                    <div className={styles.treatmentContainer}>
                        <p className={cn(styles.paragraph, styles.example)}>
                            Name of medicine
                        </p>
                        <p className={cn(styles.paragraphDate, styles.example)}>
                            Medication date
                        </p>
                        <p className={cn(styles.paragraphDate, styles.example)}>
                            Repeat date
                        </p>
                        <p className={cn(styles.paragraph, styles.example)}>
                            Notes
                        </p>
                        <p
                            className={cn(
                                styles.paragraphDelete,
                                styles.example
                            )}
                        >
                            Delete
                        </p>
                    </div>
                    {data.slice(0, expanded ? data.length : 3).map((item) => {
                        return (
                            <div
                                className={styles.treatmentContainer}
                                key={item._id + item.date}
                            >
                                <p className={styles.paragraph}>{item.name}</p>
                                <p className={styles.paragraphDate}>
                                    {format(item.date, 'dd/MM/yyyy')}
                                </p>
                                <p className={styles.paragraphDate}>
                                    {item.nextDate
                                        ? format(item.nextDate, 'dd/MM/yyyy')
                                        : 'X'}
                                </p>
                                <p className={styles.paragraph}>{item.notes}</p>
                                <Button
                                    className={styles.paragraphDelete}
                                    onClick={onMedicineDelete(
                                        item._id,
                                        item.date
                                    )}
                                >
                                    <X />
                                </Button>
                            </div>
                        )
                    })}
                </>
            ) : (
                <p className={styles.paragraphEmpty}>No treatment history</p>
            )}
            <div className={styles.buttonContainer}>
                {data.length > 3 && (
                    <Button className={styles.moreButton} onClick={toggleClick}>
                        {expanded ? 'see less...' : 'see more...'}
                    </Button>
                )}
                <Button
                    onClick={addTreatmentPopupProps.onPopupOpen}
                    className={cn(styles.addButton, {
                        [styles.addBtnCenter]: data.length <= 3,
                    })}
                >
                    Add new treatment +
                </Button>
            </div>
            <PopupAddTreatment
                petId={petId}
                {...addTreatmentPopupProps}
                type={type}
            />
        </section>
    )
}
