import { Button } from '@/components/Button'
import styles from './index.module.css'
import { Form } from '@/components/Form'

export const LoginPage = () => {
    return (
            <Form className={styles.form} header='Login to your Pet Care accont:'>
                <label className={styles.label} htmlFor='login'>Login:</label>
                <input className={styles.input} id='login' name='login'/>
                <label  className={styles.label} htmlFor='password'>Password:</label>
                <input className={styles.input} id='password' name='password'/>
                <Button type='submit' className={styles.submitButton}>Login</Button>
                <p className={styles.paragraph}>Still don't have an account in Pet Care? <a href='/registration'>Sign up</a></p>
            </Form>
    )
}