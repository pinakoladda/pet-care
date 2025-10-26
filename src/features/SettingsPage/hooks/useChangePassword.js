import { useChangeUserPassword } from '@/lib/api'
import React from 'react'

export const useChangePassword = ({ userData }) => {
    const { mutateAsync: changePassword, isPending } = useChangeUserPassword()
    const [currentPassword, setCurrentPassword] = React.useState('')
    const [newPassword, setNewPassword] = React.useState('')
    const [repeatPassword, setRepeatPassword] = React.useState('')
    const [errorMessage, setErrorMessage] = React.useState()
    const [successMessage, setSuccesMessage] = React.useState(false)

    const onChange = (stateFn) => (event) => {
        stateFn(event.target.value)
        setErrorMessage('')
        setSuccesMessage(false)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        if (currentPassword === newPassword) {
            setErrorMessage(
                'current password and new rassword shouldnt be equal'
            )
            return
        } else if (newPassword !== repeatPassword) {
            setErrorMessage(
                'new password and repeat password fields should be equal'
            )
            return
        }
        changePassword({ currentPassword, newPassword, userId: userData?._id })
            .then(() => {
                setNewPassword('')
                setCurrentPassword('')
                setRepeatPassword('')
                setSuccesMessage(true)
            })
            .catch((error) => {
                const errorData = error.response.data
                console.log(errorData)
                if (errorData.details) {
                    setErrorMessage(
                        errorData.details
                            .map(({ message }) => message)
                            .join('\n')
                    )
                } else {
                    setErrorMessage(errorData.message)
                }
            })
    }

    return {
        fields: {
            currentPassword: {
                value: currentPassword,
                onChange: onChange(setCurrentPassword),
            },
            newPassword: {
                value: newPassword,
                onChange: onChange(setNewPassword),
            },
            repeatPassword: {
                value: repeatPassword,
                onChange: onChange(setRepeatPassword),
            },
        },
        onSubmit,
        submitDisabled:
            errorMessage ||
            !currentPassword ||
            !newPassword ||
            !repeatPassword ||
            isPending,
        errorMessage,
        successMessage,
    }
}
