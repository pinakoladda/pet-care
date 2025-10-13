import React from "react"
import { CircleCheck, UserRoundPen, X } from "lucide-react"
import { Button } from '@/components/Button'
import { Avatar } from "@/components/Avatar"

import styles from './index.module.css'
import cn from "classnames"
import { useDeletePet } from "@/lib/api"

const ProfileContext = React.createContext();

const useProfileContext = () => {
    const context = React.useContext(ProfileContext);

    return context
}

export const PetInfo = ({ name, children, petId }) => {
    const [isEditing, setIsEditing] = React.useState(false);
    const { mutateAsync: deletePet, isPending } = useDeletePet()
    

    const toggle = () => {
        setIsEditing((value) => !value)
    }

    const onDeletePet = () => {
        deletePet(petId)
        .then(() => {
            window.location.href = '/'
        })
        .catch((error) => {
            console.log(error.response.data.message)
        })
    } 

    return (
        <ProfileContext.Provider value={{isEditing}}>
            <div className={styles.petInfo}>
                <section className={styles.section}>
                    <div className={styles.container}>
                        <Avatar className={styles.avatar}/>
                        <PetEditField className={styles.petName} value={name}/>
                    </div>
                    <div className={styles.container}>
                        {children}
                    </div>
                </section>
                <div className={styles.container}>
                    {isEditing && <Button><CircleCheck size={28} color="#c2c2c2" strokeWidth={1.5} /></Button>}
                    <Button className={styles.button} onClick={toggle}>
                        {isEditing 
                        ? <X size={28} color="#c2c2c2" strokeWidth={1.5} />
                        : <UserRoundPen size={28} color="#c2c2c2" strokeWidth={1.5} />
                        }
                    </Button>
                    {isEditing && <Button disabled={isPending} onClick={onDeletePet} className={styles.deletePetButton}>Delete tail</Button>}
                </div>
            </div>
        </ProfileContext.Provider>
    )
}

export const PetEditField = ({ value, label, nonEditable, className, as, ...props }) => {
    const { isEditing } = useProfileContext();
    const Component = as || 'input';

    if(isEditing && !nonEditable) {
        return (
            <div className={styles.isEdit}>
                <div className={styles.labelContainer}>
                    {label && <label className={styles.label}>{label}: </label>}
                </div>
                <div className={styles.inputContainer}>
                    <Component className={styles.input} defaultValue={value} {...props}/> 
                </div>
            </div>
        )
    }

    return (
        <p className={cn(styles.infoParagraph, className)}>{label ? label + ':' : ''} {value}</p>
    )
}