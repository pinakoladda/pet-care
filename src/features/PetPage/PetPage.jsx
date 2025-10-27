import React from 'react'
import { PetInfo } from './components/PetInfo'
import { usePetData } from '@/lib/api'
import { Loader } from '@/components/Loader'
import { useAuthRouting } from '@/hooks/useAuthRouting'
import { Header } from '@/components/Header'
import styles from './index.module.css'
import { PetMedicalInfo } from './components/PetMedicalInfo/PetMedicalInfo'

export const PetPage = () => {
    useAuthRouting()
    const petId = window.location.pathname.split('/')[2]
    const { data, isLoading } = usePetData(petId)

    return (
        <main className={styles.petPage}>
            <Header />
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <PetInfo
                        petData={data}
                        name={data?.name}
                        petId={petId}
                        avatar={data?.avatarUrl.lg}
                    />
                    <PetMedicalInfo />
                </>
            )}
        </main>
    )
}
