import { Button } from '@/components/Button'
import styles from './index.module.css'
import { PopupAddInsectsTreatment } from './components/PopupAddInsectsTreatment'
import { usePopupProps } from '@/hooks/usePopupProps'
import cn from 'classnames'
import { useDeleteMedicine, useGetMedicines } from '@/lib/api/medicine'
import { format } from 'date-fns'
import { X } from 'lucide-react'
import React from 'react'
import { PopupAddVormsTreatment } from './components/PopupAddVormsTreatment'

export const PetTreatment = ({ name, petId }) => {
    const addInsectsTreatmentPopupProps = usePopupProps()
    const addVormsTreatmentPopupProps = usePopupProps()

    const { data } = useGetMedicines(petId)
    const { mutateAsync: deleteMedicineFn } = useDeleteMedicine()
    const [expandedInsects, setExpandedInsects] = React.useState(false)
    const [expandedVorms, setExpandedVorms] = React.useState(false)

    const dataInsects = data?.filter(({ type }) => type === 'insects') || []
    const dataVorms = data?.filter(({ type }) => type === 'vorms') || []

    const onMedicineDelete = (medicineId) => () => {
        deleteMedicineFn(medicineId)
    }

    const toggleInsectsClick = () => {
        setExpandedInsects((v) => !v)
    }

    const toggleVormsClick = () => {
        setExpandedVorms((v) => !v)
    }

    return (
        <main className={styles.petTreatment}>
            <h3 className={styles.header}>{name}'s treatment</h3>
            <section className={styles.sectionTreatment}>
                <h4 className={styles.subheading}>
                    Flea and tick preventative treatment
                </h4>
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
                    <p className={cn(styles.paragraphDelete, styles.example)}>
                        Delete
                    </p>
                </div>
                {data && data.length > 0 ? (
                    <>
                        {dataInsects
                            .slice(0, expandedInsects ? data.length : 3)
                            .map((item) => {
                                return (
                                    <div
                                        className={styles.treatmentContainer}
                                        key={item._id}
                                    >
                                        <p className={styles.paragraph}>
                                            {item.name}
                                        </p>
                                        <p className={styles.paragraphDate}>
                                            {format(item.date, 'dd/MM/yyyy')}
                                        </p>
                                        <p className={styles.paragraphDate}>
                                            {item.nextDate
                                                ? format(
                                                      item.nextDate,
                                                      'dd/MM/yyyy'
                                                  )
                                                : 'X'}
                                        </p>
                                        <p className={styles.paragraph}>
                                            {item.notes}
                                        </p>
                                        <Button
                                            className={styles.paragraphDelete}
                                            onClick={onMedicineDelete(item._id)}
                                        >
                                            <X />
                                        </Button>
                                    </div>
                                )
                            })}
                    </>
                ) : (
                    <p>No treatment history</p>
                )}
                <div className={styles.buttonContainer}>
                    {dataInsects.length > 3 && (
                        <Button
                            className={styles.moreButton}
                            onClick={toggleInsectsClick}
                        >
                            {expandedInsects ? 'see less...' : 'see more...'}
                        </Button>
                    )}
                    <Button
                        onClick={addInsectsTreatmentPopupProps.onPopupOpen}
                        className={styles.addButton}
                    >
                        Add new treatment +
                    </Button>
                </div>
                <PopupAddInsectsTreatment
                    petId={petId}
                    {...addInsectsTreatmentPopupProps}
                    type="insects"
                />
            </section>

            <section className={styles.sectionTreatment}>
                <h4 className={styles.subheading}>Antiparasite treatment</h4>
                <h4 className={styles.subheading}>
                    Flea and tick preventative treatment
                </h4>
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
                    <p className={cn(styles.paragraphDelete, styles.example)}>
                        Delete
                    </p>
                </div>
                {data && data.length > 0 ? (
                    <>
                        {dataVorms
                            .slice(0, expandedVorms ? data.length : 3)
                            .map((item) => {
                                return (
                                    <div
                                        key={item._id}
                                        className={styles.treatmentContainer}
                                    >
                                        <p className={styles.paragraph}>
                                            {item.name}
                                        </p>
                                        <p className={styles.paragraphDate}>
                                            {format(item.date, 'dd/MM/yyyy')}
                                        </p>
                                        <p className={styles.paragraphDate}>
                                            {item.nextDate
                                                ? format(
                                                      item.nextDate,
                                                      'dd/MM/yyyy'
                                                  )
                                                : 'X'}
                                        </p>
                                        <p className={styles.paragraph}>
                                            {item.notes}
                                        </p>
                                        <Button
                                            className={styles.paragraphDelete}
                                            onClick={onMedicineDelete(item._id)}
                                        >
                                            <X />
                                        </Button>
                                    </div>
                                )
                            })}
                    </>
                ) : (
                    <p>No treatment history</p>
                )}
                <div className={styles.buttonContainer}>
                    {dataVorms.length > 3 ? (
                        <Button
                            className={styles.moreButton}
                            onClick={toggleVormsClick}
                        >
                            {expandedVorms ? 'see less...' : 'see more...'}
                        </Button>
                    ) : (
                        ''
                    )}

                    <Button
                        className={styles.addButton}
                        onClick={addVormsTreatmentPopupProps.onPopupOpen}
                    >
                        Add new treatment +
                    </Button>
                </div>
                <PopupAddVormsTreatment
                    {...addVormsTreatmentPopupProps}
                    petId={petId}
                    type="vorms"
                />
            </section>
        </main>
    )
}
