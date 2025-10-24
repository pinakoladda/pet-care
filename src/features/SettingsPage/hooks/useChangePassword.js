import React from 'react'

export const useChangePassword = () => {
    const [oldPassword, setOldPassword] = React.useState('')
    const [newPassword, setNewPassword] = React.useState('')
    const [repeatPassword, setRepeatPassword] = React.useState('')
    const [theme, setTheme] = React.useState('dark')
    const [errorMessage, setErrorMessage] = React.useState()

    const passwordCheck = () => {
        if (oldPassword === newPassword) {
            console.log('old password shouldnt be equal to new one')
            setErrorMessage('old password shouldnt be equal to a new one')
        } else if (newPassword !== repeatPassword) {
            console.log('your repeat password isnt equal to new password')
            setErrorMessage('your repeat password isnt equal to new password')
        } else {
            console.log('your new password:' + newPassword)
            setNewPassword('')
            setOldPassword('')
            setRepeatPassword('')
        }
    }

    const onChange = (stateFn) => (event) => {
        stateFn(event.target.value)
        setErrorMessage('')
    }

    const onSubmit = (event) => {
        event.preventDefault()
        passwordCheck()
    }

    return {
        fields: {
            oldPassword: {
                value: oldPassword,
                onChange: onChange(setOldPassword),
            },
            newPassword: {
                value: newPassword,
                onChange: onChange(setNewPassword),
            },
            repeatPassword: {
                value: repeatPassword,
                onChange: onChange(setRepeatPassword),
            },
            theme: {
                value: theme,
                onChange: onChange(setTheme),
            },
        },
        onSubmit,
        submitDisabled: errorMessage,
        errorMessage,
    }
}
