import React from "react"
import { Notification } from "./components/Notification"
import { Pets } from "./components/Pets"
import { ProfileInfo } from "@/components/ProfileInfo"
import { useAuth } from "@/lib/api"
import { Header } from "@/components/Header"
import { Loader } from '@/components/Loader'
import { useAuthRouting } from "@/hooks/useAuthRouting"
import { AddPetForm } from "@/features/AddPetForm"
import { ConfirmaitionModal } from "@/components/ConfirmationModal"

import styles from './index.module.css'

export const MainPage = () => {
    useAuthRouting()
    const { data, isLoading } = useAuth();
    const [visible, setVisible] = React.useState(false)  

    const onAddPet = () => {
        setVisible(true)
    }

    const onPopupClose = () => {
         setVisible(false)
    }

    return (
        <>
            <div className={styles.mainPage}>
                {isLoading 
                ? <Loader />
                : <>
                    <Header page='mainPage' />
                    <ProfileInfo name={data?.name} login={data?.login} />
                    <Notification />
                    <Pets onAddPet={onAddPet} ownerId={data?._id} />
                    <AddPetForm visible={visible} onPopupClose={onPopupClose}/>
                </>}
            </div>
        </>
    )
}