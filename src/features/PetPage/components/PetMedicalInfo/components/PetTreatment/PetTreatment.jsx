import React from 'react'
import { useGetMedicines } from '@/lib/api/medicine'
import styles from './index.module.css'
import { Loader } from '@/components/Loader'
import { TreatmentSection } from './components/TreatmentsSection'

export const PetTreatment = ({ name, petId }) => {
    const { data, isLoading } = useGetMedicines(petId)
    const dataInsects = data?.filter(({ type }) => type === 'insects') || []
    const dataVorms = data?.filter(({ type }) => type === 'vorms') || []
    const dataVaccinations =
        data?.filter(({ type }) => type === 'vaccinations') || []

    return (
        <main className={styles.petTreatment}>
            <h3 className={styles.header}>{name}'s treatment</h3>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <TreatmentSection
                        header="Treatment against fleas, ticks and mosquitoes"
                        petId={petId}
                        type="insects"
                        data={dataInsects}
                    />
                    <TreatmentSection
                        header="Treatment against helmints (vorms)"
                        petId={petId}
                        type="vorms"
                        data={dataVorms}
                    />
                    <TreatmentSection
                        header="Vaccinations"
                        petId={petId}
                        type="vaccinations"
                        data={dataVaccinations}
                    />
                </>
            )}
        </main>
    )
}
