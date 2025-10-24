import React from 'react'
import { Form } from '@/components/Form'
import { Button } from '@/components/Button'
import { useRegistration } from '@/lib/api'
import { Input } from '@/components/Input'
import { useTokenCheck } from '@/hooks/useTokenCheck'
import styles from './index.module.css'
import { ErrorMessage } from '@/components/ErrorMessage'

export const RegistrationPage = () => {
    useTokenCheck()
    const { mutateAsync: registrationFn, isPending } = useRegistration()
    const [nameValue, setNameValue] = React.useState('')
    const [emailValue, setEmailValue] = React.useState('')
    const [loginValue, setLoginValue] = React.useState('')
    const [passwordValue, setPasswordValue] = React.useState('')
    const [errorMessage, setErrorMessage] = React.useState('')

    const onNameChange = (event) => {
        setNameValue(event.target.value)
        setErrorMessage('')
    }

    const onEmailChange = (event) => {
        setEmailValue(event.target.value)
        setErrorMessage('')
    }

    const onLoginChange = (event) => {
        setLoginValue(event.target.value)
        setErrorMessage('')
    }

    const onPasswordChange = (event) => {
        setPasswordValue(event.target.value)
        setErrorMessage('')
    }

    const onSubmit = (event) => {
        event.preventDefault()

        registrationFn({
            name: nameValue,
            email: emailValue,
            login: loginValue,
            password: passwordValue,
        })
            .then((result) => {
                window.location.href = '/'
                localStorage.setItem('token', result.token)
                console.log(result)
            })
            .catch((error) => {
                const errorData = error.response.data
                if (errorData.details) {
                    setErrorMessage(errorData.details[0].message)
                } else {
                    setErrorMessage(errorData.message)
                }
            })
    }

    return (
        <Form
            onSubmit={onSubmit}
            className={styles.form}
            header={
                <>
                    Create your{' '}
                    <span className={styles.headerAccent}> Pet Care </span>{' '}
                    account:
                </>
            }
        >
            <Input
                label="Name:"
                id="name"
                name="name"
                type="text"
                maxLength={20}
                required
                value={nameValue}
                onChange={onNameChange}
            />
            <Input
                label="Email:"
                id="email"
                name="email"
                type="email"
                required
                value={emailValue}
                onChange={onEmailChange}
            />
            <Input
                label="Login:"
                id="login"
                name="login"
                type="text"
                required
                value={loginValue}
                onChange={onLoginChange}
            />
            <Input
                label="Password:"
                id="password"
                name="password"
                type="password"
                minLength={6}
                maxLength={20}
                required
                value={passwordValue}
                onChange={onPasswordChange}
            />
            <ErrorMessage errorMessage={errorMessage} />
            <Button
                disabled={isPending}
                type="submit"
                className={styles.submitButton}
            >
                Registration
            </Button>
            <p className={styles.paragraph}>
                Already have an account? <a href="/login">Sign in</a>
            </p>
        </Form>
    )
}
