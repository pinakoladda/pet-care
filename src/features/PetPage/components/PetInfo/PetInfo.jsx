import React from 'react'
import cn from 'classnames'
import { CircleCheck, UserRoundPen, X } from 'lucide-react'
import { Button } from '@/components/Button'
import { Avatar } from '@/components/Avatar'
import { useDeletePet, usePatchPet } from '@/lib/api'
import { ConfirmaitionModal } from '@/components/ConfirmationModal'
import { AddPetForm } from '@/features/AddPetForm'
import { formatAge, formatDate } from '@/lib/helpers'
import styles from './index.module.css'

const OPTIONS = [
    {
        text: 'yes',
        value: 'confirm',
    },
    {
        text: 'no',
        value: 'decline',
    },
]

// кнопочки редактирования, кнопка удаления питомца

export const PetInfo = ({ name, petId, avatar, petData }) => {
    const [editPopupVisible, setEditPopupVisible] = React.useState(false)
    const { mutateAsync: deletePet, isPending } = useDeletePet()
    const { mutateAsync: patchPet } = usePatchPet()

    const [visible, setVisible] = React.useState(false)

    const onDelete = () => {
        setVisible(true)
    }

    const onPopupClose = () => {
        setVisible(false)
    }

    const toggle = () => {
        setEditPopupVisible((value) => !value)
    }

    const onDeletePet = () => {
        deletePet(petId)
            .then(() => {
                onPopupClose()
                window.location.href = '/'
            })
            .catch((error) => {
                console.log(error.response.data.message)
            })
    }

    return (
        <div className={styles.petInfo}>
            <div className={styles.avatarContainer}>
                <Avatar src={avatar} className={styles.avatar} glowing />
                <PetInfoField className={styles.petName} value={name} />
            </div>
            <div className={styles.infoContainer}>
                <PetInfoField
                    label="Date of birth"
                    value={formatDate(petData?.birthDate)}
                />
                <PetInfoField
                    label="Age"
                    value={`${formatAge(petData?.birthDate)} years old`}
                />
                <PetInfoField value="Libra ♎︎" />
                <PetInfoField label="Gender" value={petData?.gender} />
                <PetInfoField label="Weight" value="3" />
                <PetInfoField label="Breed" value={petData?.breed} />
                <PetInfoField label="Color" value="..." />
                <PetInfoField
                    label="Neutered"
                    value={petData?.neutured ? 'yes' : 'no'}
                />
            </div>
            <div className={styles.container}>
                {/* <Button className={styles.button} onClick={toggle}>
                    <UserRoundPen size={28} color="#c2c2c2" strokeWidth={1.5} />
                </Button> */}
                <Button className={styles.editButton} onClick={toggle}>
                    Edit Tail
                </Button>
                <Button onClick={onDelete} className={styles.deleteButton}>
                    Delete tail
                </Button>
            </div>
            <ConfirmaitionModal
                header="Are you fucking sure?"
                visible={visible}
                options={OPTIONS}
                onPopupClose={onPopupClose}
                onConfirm={onDeletePet}
                disabled={isPending}
            />
            <AddPetForm
                visible={editPopupVisible}
                onPopupClose={toggle}
                defaultValues={petData}
                apiFn={patchPet}
                petId={petId}
                header="Edit pet info:"
                buttonText="Save tail"
            />
        </div>
    )
}

export const PetInfoField = ({ value, label, className }) => {
    return (
        <p className={cn(styles.infoParagraph, className)}>
            {label ? label + ':' : ''} {value}
        </p>
    )
}
