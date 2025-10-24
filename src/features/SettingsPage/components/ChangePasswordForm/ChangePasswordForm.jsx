import { Form } from '@/components/Form'
import { useChangePassword } from '../../hooks/useChangePassword'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { ErrorMessage } from '@/components/ErrorMessage'
import styles from './index.module.css'

export const ChangePasswordForm = () => {
    const { fields, onSubmit, errorMessage, submitDisabled } =
        useChangePassword()
    return (
        <Form
            header="Setup a new password:"
            className={styles.passwordForm}
            onSubmit={onSubmit}
        >
            <Input
                label="Old password:"
                name="oldPassword"
                id="oldPassword"
                {...fields.oldPassword}
            />
            <Input
                label="New password:"
                name="newPassword"
                id="newPassword"
                {...fields.newPassword}
            />
            <Input
                label="Repeat password:"
                name="repeatPassword"
                id="repeatPassword"
                {...fields.repeatPassword}
            />
            <ErrorMessage errorMessage={errorMessage} />
            <div className={styles.buttonContainer}>
                <Button
                    disabled={submitDisabled}
                    className={styles.button}
                    type="submit"
                >
                    Save changes
                </Button>
            </div>
        </Form>
    )
}
