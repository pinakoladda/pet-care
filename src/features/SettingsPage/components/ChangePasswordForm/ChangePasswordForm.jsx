import { Form } from '@/components/Form'
import { useChangePassword } from '../../hooks/useChangePassword'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { ErrorMessage } from '@/components/ErrorMessage'
import styles from './index.module.css'

export const ChangePasswordForm = ({ userData }) => {
    const { fields, onSubmit, errorMessage, submitDisabled, successMessage } =
        useChangePassword({ userData })
    return (
        <Form
            header="Setup a new password:"
            className={styles.passwordForm}
            onSubmit={onSubmit}
        >
            <Input
                label="Current password:"
                name="currentPassword"
                id="currentPassword"
                {...fields.currentPassword}
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
            {successMessage && (
                <p className={styles.successMessage}>
                    Your password changed successfully!
                </p>
            )}
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
