import React from 'react'
import cn from 'classnames'
import { Button } from '@/components/Button'
import { Avatar } from '@/components/Avatar'
import {
    useDeletePet,
    usePatchAvatarPet as usePatchPetAvatar,
    usePatchPet,
    usePetWeight,
} from '@/lib/api'
import { ConfirmaitionModal } from '@/components/ConfirmationModal'
import { AddPetForm } from '@/features/AddPetForm'
import { convertWeight, formatAge, formatDate } from '@/lib/helpers'
import { useGlobalContext } from '@/contexts/GlobalContext'
import styles from './index.module.css'

export const PetInfo = ({ name, petId, avatar, petData }) => {
    const [editPopupVisible, setEditPopupVisible] = React.useState(false)
    const { data } = usePetWeight(petId)
    const { mutateAsync: deletePet, isPending } = useDeletePet()
    const { mutateAsync: patchPet } = usePatchPet()
    const { mutateAsync: patchPetAvatar } = usePatchPetAvatar()
    const {
        state: { measure },
    } = useGlobalContext()

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

    const onUploadAvatar = (data) => {
        return patchPetAvatar({ ...data, petId })
    }

    return (
        <div className={styles.petInfo}>
            <div className={styles.avatarContainer}>
                <Avatar
                    src={avatar}
                    className={styles.avatar}
                    glowing
                    isEditable
                    onUpload={onUploadAvatar}
                />
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
                {data?.weight?.weight ? (
                    <PetInfoField
                        label="Weight"
                        value={
                            convertWeight(data?.weight?.weight, measure) +
                            ' ' +
                            measure
                        }
                    />
                ) : (
                    ''
                )}
                <PetInfoField label="Breed" value={petData?.breed} />
                {/* <PetInfoField label="Color" value="..." /> */}
                <PetInfoField
                    label="Neutered"
                    value={petData?.neutured ? 'yes' : 'no'}
                />
            </div>
            <div className={styles.container}>
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
