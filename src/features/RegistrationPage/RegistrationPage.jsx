import { Form } from '@/components/Form'
import styles from './index.module.css'
import { Button } from '@/components/Button'

export const RegistrationPage = () => {
    return (
            <Form className={styles.form} header='Create your Pet Care accont:'>
                <label className={styles.label} htmlFor='name'>Name:</label>
                <input 
                    className={styles.input} 
                    id='name' 
                    name='name' 
                    type='text' 
                    maxLength={20}
                    required
                />
                <label className={styles.label} htmlFor='email'>Email:</label>
                <input 
                    className={styles.input} 
                    id='email' name='email' 
                    type='email' 
                    required
                />
                <label  className={styles.label} htmlFor='password'>Password:</label>
                <input 
                    className={styles.input} 
                    id='password' 
                    name='password' 
                    type='password' 
                    minLength={6} 
                    maxLength={20}
                    required
                />
                <Button type='submit' className={styles.submitButton}>Registration</Button>
                <p className={styles.paragraph}>Already have an account? <a href='/login'>Sign in</a></p>
            </Form>
    )
}