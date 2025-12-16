import { format } from 'date-fns'
import styles from './index.module.css'
import { Button } from '@/components/Button'
import { PlusCircle, X } from 'lucide-react'
import { usePopupProps } from '@/hooks/usePopupProps'
import { PopupAddTreatment } from '../../../PopupAddTreatment'

export const TreatmentsSectionSmall = ({
    data,
    onMedicineDelete,
    header,
    expanded,
    toggleClick,
    dataExpandedSort,
    ...props
}) => {
    const addTreatmentPopupProps = usePopupProps()
    return (
        <>
            <section className={styles.sectionTreatment}>
                <h4 className={styles.header}>{header}</h4>
                {dataExpandedSort.map((item) => {
                    return (
                        <div
                            key={item._id}
                            className={styles.treatmentContainerSmall}
                        >
                            <div className={styles.containerSmall}>
                                <h4 className={styles.exampleSmall}>
                                    Name of medicine:
                                </h4>
                                <p className={styles.paragraphSmall}>
                                    {item.name}
                                </p>
                            </div>
                            <div className={styles.containerSmall}>
                                <h4 className={styles.exampleSmall}>
                                    Medication date:
                                </h4>
                                <p className={styles.paragraphSmall}>
                                    {format(item.date, 'dd.MM.yyyy')}
                                </p>
                            </div>
                            <div className={styles.containerSmall}>
                                <h4 className={styles.exampleSmall}>
                                    Repeat date:
                                </h4>
                                <p className={styles.paragraphSmall}>
                                    {item.nextDate
                                        ? format(item.nextDate, 'dd.MM.yyyy')
                                        : 'X'}
                                </p>
                            </div>
                            <div className={styles.containerSmall}>
                                <h4 className={styles.exampleSmall}>Notes:</h4>
                                <p className={styles.paragraphSmall}>
                                    {item.notes}
                                </p>
                            </div>

                            <Button
                                className={styles.smallDeleteBtn}
                                onClick={onMedicineDelete(item._id, item.date)}
                                styleType="transparent"
                            >
                                Delete
                            </Button>
                        </div>
                    )
                })}
                {data.length >= 3 && (
                    <Button className={styles.moreButton} onClick={toggleClick}>
                        {expanded ? 'see less...' : 'see more...'}
                    </Button>
                )}
                <Button
                    onClick={addTreatmentPopupProps.onPopupOpen}
                    className={styles.smallAddBtn}
                >
                    <PlusCircle className={styles.btnPlusIcon} />
                </Button>
                <PopupAddTreatment
                    petId={props.petId}
                    {...addTreatmentPopupProps}
                    type={props.type}
                />
            </section>
        </>
    )
}
