import React from 'react'
import { Popup } from '@/components/Popup'
import { Form } from '@/components/Form'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { Select } from '@/components/Select'
import { RadioGroup } from '@/components/RadioGroup'
import { useAddPetForm } from './hooks/useAddPetForm'
import { Suggest } from '@/components/Suggest'
import styles from './index.module.css'
import { ErrorMessage } from '@/components/ErrorMessage'
import { Trans } from '@lingui/react/macro'

const PET_TYPE = [
    {
        value: 'dog',
        text: 'doggo',
    },
    {
        value: 'cat',
        text: 'kitty',
    },
]
const GENDER = [
    {
        value: 'boy',
        text: 'good boy',
    },
    {
        value: 'girl',
        text: 'good girl',
    },
]

const NEUTURED_OPTIONS = [
    {
        value: 'true',
        text: 'Yes',
    },
    {
        value: 'false',
        text: 'No',
    },
]

export const AddPetForm = ({
    visible,
    onPopupClose,
    defaultValues,
    apiFn,
    petId,
    header,
    buttonText,
}) => {
    const { fields, submitDisabled, onSubmit, errorMessage } = useAddPetForm({
        onPopupClose,
        defaultValues,
        apiFn,
        petId,
    })

    return (
        <Popup
            className={styles.popup}
            visible={visible}
            onPopupClose={onPopupClose}
        >
            <div className={styles.main}>
                <Form
                    className={styles.form}
                    header={header}
                    headerClassName={styles.header}
                    onSubmit={onSubmit}
                >
                    <Input
                        label="Name:"
                        id="name"
                        name="name"
                        maxLength={20}
                        className={styles.inputName}
                        required
                        {...fields.name}
                    />
                    <Select
                        label="Which type your tail is?"
                        id="type"
                        name="type"
                        options={PET_TYPE}
                        className={styles.input}
                        {...fields.type}
                    />
                    <Input
                        label="Date of birth:"
                        id="birthDate"
                        name="birthDate"
                        type="date"
                        required
                        className={styles.input}
                        {...fields.birthDate}
                    />
                    <Select
                        label="Gender:"
                        id="gender"
                        name="gender"
                        options={GENDER}
                        className={styles.input}
                        {...fields.gender}
                    />
                    <Suggest
                        label="Enter your tail breed:"
                        id="breed"
                        name="breed"
                        type="text"
                        required
                        className={styles.input}
                        {...fields.breed}
                    />
                    <legend className={styles.radioQuestion}>
                        <Trans>Is neutured?</Trans>
                    </legend>
                    <section className={styles.radioSection}>
                        <RadioGroup
                            name="neutured"
                            options={NEUTURED_OPTIONS}
                            {...fields.neutured}
                        />
                    </section>
                    <Button
                        disabled={submitDisabled}
                        className={styles.button}
                        type="submit"
                    >
                        {buttonText}
                    </Button>
                    <ErrorMessage errorMessage={errorMessage} />
                </Form>
            </div>
        </Popup>
    )
}
