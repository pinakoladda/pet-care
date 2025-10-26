import React from 'react'
import { Notification } from './components/Notification'
import { Pets } from './components/Pets'
import { ProfileInfo } from '@/components/ProfileInfo'
import { useCreatePet } from '@/lib/api'
import { Header } from '@/components/Header'
import { Loader } from '@/components/Loader'
import { useAuthRouting } from '@/hooks/useAuthRouting'
import { AddPetForm } from '@/features/AddPetForm'

import styles from './index.module.css'
import { useGlobalContext } from '@/contexts/GlobalContext'

export const MainPage = () => {
    useAuthRouting()
    const {
        state: { user, isLoading },
    } = useGlobalContext()
    const [visible, setVisible] = React.useState(false)
    const { mutateAsync: apiFn } = useCreatePet()

    const onAddPet = () => {
        setVisible(true)
    }

    const onPopupClose = () => {
        setVisible(false)
    }

    return (
        <>
            <div className={styles.mainPage}>
                {isLoading ? (
                    <Loader />
                ) : (
                    <>
                        <Header page="mainPage" />
                        <ProfileInfo userData={user} />
                        <Notification />
                        <Pets onAddPet={onAddPet} ownerId={user?._id} />
                        <AddPetForm
                            visible={visible}
                            onPopupClose={onPopupClose}
                            apiFn={apiFn}
                            header="Add new pet:"
                            buttonText="Save new tail"
                        />
                    </>
                )}
            </div>
        </>
    )
}
