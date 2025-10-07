import React from 'react';
import { Button } from '@/components/Button'
import { Form } from '@/components/Form'
import styles from './index.module.css'
import { useLogin } from '@/lib/api';
import { Input } from '@/components/Input';
import { useTokenCheck } from '@/hooks/useTokenCheck';

export const LoginPage = () => {
    useTokenCheck()
    const { mutateAsync: loginFn, isPending } = useLogin()
    const [loginValue, setLoginValue] = React.useState('');
    const [passwordValue, setPasswordValue] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState('');

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
            <Form onSubmit={onSubmit} className={styles.form} header={<>Login to your <span className={styles.headerAccent}> Pet Care </span> accont:</>}>
                <Input 
                    label='Login:'
                    id='login' 
                    name='login'
                    maxLength={20}
                    required
                    value={loginValue}
                    onChange={onLoginChange}
                />
                <Input
                    label='Password:'
                    id='password' 
                    name='password'
                    type='password'
                    // minLength={6} 
                    maxLength={20}
                    required
                    value={passwordValue}
                    onChange={onPasswordChange}
                />
                {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
                <Button disabled={isPending} type='submit' className={styles.submitButton}>Login</Button>
                <p className={styles.paragraph}>Still don't have an account in Pet Care? <a href='/registration'>Sign up</a></p>
            </Form>
    )
}