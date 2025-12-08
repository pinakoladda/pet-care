import React from 'react'
import { Button } from '@/components/Button'
import { Form } from '@/components/Form'
import styles from './index.module.css'
import { useLogin } from '@/lib/api'
import { Input } from '@/components/Input'
import { useTokenCheck } from '@/hooks/useTokenCheck'
import { Trans } from '@lingui/react/macro'

export const LoginPage = () => {
    useTokenCheck()
    const { mutateAsync: loginFn, isPending } = useLogin()
    const [loginValue, setLoginValue] = React.useState('')
    const [passwordValue, setPasswordValue] = React.useState('')
    const [errorMessage, setErrorMessage] = React.useState('')

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

        loginFn({ login: loginValue, password: passwordValue })
            .then((result) => {
                localStorage.setItem('token', result.token)
                window.location.href = '/'
            })
            .catch((error) => {
                setErrorMessage(error.response.data.message)
                console.log(error.response.data.message)
            })
    }

    return (
        <Form
            onSubmit={onSubmit}
            className={styles.form}
            header={
                <>
                    Login to your
                    <span className={styles.headerAccent}> Pet Care </span>{' '}
                    account:
                </>
            }
        >
            <Input
                label="Login:"
                id="login"
                name="login"
                maxLength={40}
                required
                value={loginValue}
                onChange={onLoginChange}
            />
            <Input
                label="Password:"
                id="password"
                name="password"
                type="password"
                maxLength={20}
                required
                value={passwordValue}
                onChange={onPasswordChange}
            />
            {errorMessage && (
                <p className={styles.errorMessage}>{errorMessage}</p>
            )}
            <Button
                disabled={isPending}
                type="submit"
                className={styles.submitButton}
            >
                <Trans>Login</Trans>
            </Button>
            <p className={styles.paragraph}>
                <Trans>Still don't have an account in Pet Care? </Trans>
                <a href="/registration">Sign up</a>
            </p>
        </Form>
    )
}
