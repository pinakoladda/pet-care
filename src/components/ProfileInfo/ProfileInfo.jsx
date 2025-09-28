import React from "react"
import { CircleCheck, UserPen, UserRoundCheck, UserRoundPen, X } from "lucide-react"
import { Button } from '@/components/Button'
import { Avatar } from "@/components/Avatar"

import styles from './index.module.css'

const ProfileContext = React.createContext();

const useProfileContext = () => {
    const context = React.useContext(ProfileContext);

    return context
}

export const ProfileInfo = ({name, login, children}) => {
    const [isEditing, setIsEditing] = React.useState(false);

    const toggle = () => {
        setIsEditing((value) => !value)
    }

    return (
        <ProfileContext.Provider value={{isEditing}}>
            <div className={styles.userInfo}>
                <section className={styles.sectionInfo}>
                    <Avatar />
                    <div className={styles.containerInfo}>
                       {name && <ProfileEditField value={name}/>}
                        {login && <p className={styles.userLogin}>{login}</p>}

                        {children}
                    </div>
                </section>
                <div className={styles.container}>
                    {isEditing && <Button><CircleCheck size={16} color="#c2c2c2" strokeWidth={1.75} /></Button>}
                    <Button className={styles.button} onClick={toggle}>
                        {isEditing 
                        ? <X size={16} color="#c2c2c2" strokeWidth={1.75} />
                        : <UserRoundPen size={28} color="#c2c2c2" strokeWidth={1.5} />}
                    </Button>
                </div>
            </div>
        </ProfileContext.Provider>
    )
}

export const ProfileEditField = ({ value, label, nonEditable }) => {
    const { isEditing } = useProfileContext();

    if(isEditing && !nonEditable) {
        return (
            <>
                {label && <label>{label}: </label>}
                <input value={value}></input> 
            </>
        )
    }

    return (
        <h3 className={styles.userName}>{label ? label + ':' : ''} {value}</h3>
    )
}