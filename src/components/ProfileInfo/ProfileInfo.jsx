import React from 'react'
import { Pencil, UserRoundPen } from 'lucide-react'
import { Button } from '@/components/Button'
import { Avatar } from '@/components/Avatar'
import styles from './index.module.css'
import { EditUserForm } from '@/features/EditUserForm'
import { Input } from '../Input'

export const ProfileInfo = ({ children, userData }) => {
    const [isEditing, setIsEditing] = React.useState(false)

    const toggle = () => {
        setIsEditing((value) => !value)
    }

    return (
        <div className={styles.userInfo}>
            <section className={styles.sectionInfo}>
                <Avatar className={styles.avatar} isEditable></Avatar>
                <div className={styles.containerInfo}>
                    {userData?.name && (
                        <ProfileEditField value={userData?.name} />
                    )}
                    {userData?.login && (
                        <p className={styles.userLogin}>{userData?.login}</p>
                    )}
                    {children}
                </div>
            </section>
            <div className={styles.container}>
                <Button className={styles.button} onClick={toggle}>
                    <UserRoundPen size={28} color="#c2c2c2" strokeWidth={1.5} />
                </Button>
            </div>
            <EditUserForm
                userData={userData}
                visible={isEditing}
                onPopupClose={toggle}
            />
        </div>
    )
}

export const ProfileEditField = ({ value, label }) => {
    return (
        <h3 className={styles.userName}>
            {label ? label + ':' : ''} {value}
        </h3>
    )
}
