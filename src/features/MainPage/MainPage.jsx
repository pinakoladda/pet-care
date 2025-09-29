import { Notification } from "./components/Notification"
import { Pets } from "./components/Pets"
import { ProfileInfo } from "@/components/ProfileInfo"
import { useUserData } from "@/lib/api"

import styles from './index.module.css'

export const MainPage = () => {
    const { data } = useUserData();

    return (
        <>
            <div className={styles.mainPage}>
                <ProfileInfo name={data?.name} login={data?.login} />
                <Notification />
                <Pets ownerId={data?._id} />
            </div>
        </>
    )
}