import { Popup } from '@/components/Popup'
import { Form } from '@/components/Form'
import { Button } from '@/components/Button'
import styles from './index.module.css'
import { Input } from '@/components/Input'
import { useEditUserForm } from './hooks/useEditUserForm'
import { Select } from '@/components/Select'
import { ErrorMessage } from '@/components/ErrorMessage'
import { Trans } from '@lingui/react/macro'

const GENDER = [
    {
        value: 'male',
        text: 'Male',
    },
    {
        value: 'female',
        text: 'Female',
    },
    {
        value: 'other',
        text: 'Other',
    },
]

export const EditUserForm = ({ visible, onPopupClose, userData }) => {
    const { onSubmit, fields, submitDisabled, errorMessage } = useEditUserForm({
        onPopupClose,
        userData,
    })

    return (
        <Popup visible={visible} onPopupClose={onPopupClose}>
            <main className={styles.main}>
                <Form
                    className={styles.form}
                    header="Edit your personal info:"
                    onSubmit={onSubmit}
                    headerClassName={styles.header}
                >
                    <Input
                        label="Name:"
                        name="name"
                        id="name"
                        maxLength={20}
                        {...fields.name}
                    />
                    <Input
                        label="Email:"
                        name="email"
                        id="email"
                        type="email"
                        {...fields.email}
                    />
                    <Select
                        label="Gender:"
                        name="gender"
                        id="gender"
                        options={GENDER}
                        {...fields.gender}
                    />
                    <Button
                        disabled={submitDisabled}
                        className={styles.button}
                        type="submit"
                    >
                        <Trans>Save changes</Trans>
                    </Button>
                    <ErrorMessage errorMessage={errorMessage} />
                </Form>
            </main>
        </Popup>
    )
}
