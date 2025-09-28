import { Notification } from "./components/Notification"
import { Pets } from "./components/Pets"
import { ProfileInfo } from "@/components/ProfileInfo"

import styles from './index.module.css'

export const MainPage = () => {
    return (
        <>
            <div className={styles.mainPage}>
                <ProfileInfo name="Nina" login="pinakolada"/>
                <Notification />
                <Pets />
            </div>
        </>
    )
}