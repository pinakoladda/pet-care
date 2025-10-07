import { Notification } from "./components/Notification"
import { Pets } from "./components/Pets"
import { ProfileInfo } from "@/components/ProfileInfo"
import { useAuth } from "@/lib/api"
import { Header } from "@/components/Header"
import { Loader } from '@/components/Loader'

import styles from './index.module.css'
import { useAuthRouting } from "@/hooks/useAuthRouting"

export const MainPage = () => {
    useAuthRouting()
    const { data, isLoading } = useAuth();

    return (
        <>
            <Header />
            <div className={styles.mainPage}>
                {isLoading 
                ? <Loader />
                : <>
                    <ProfileInfo name={data?.name} login={data?.login} />
                    <Notification />
                    <Pets ownerId={data?._id} />
                </>}
            </div>
        </>
    )
}