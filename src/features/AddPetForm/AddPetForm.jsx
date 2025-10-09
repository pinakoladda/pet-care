import { Popup } from '@/components/Popup'
import { Form } from '@/components/Form'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { Select } from '@/components/Select'
import styles from './index.module.css'
import { RadioGroup } from '@/components/RadioGroup'
import React from 'react'

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
    }
]

export const AddPetForm = ({  visible, onPopupClose }) => {
    const [value, setValue] = React.useState('')

    const isHandleChecked = (event) => {
        setValue(event.target.value)
    }

    console.log(value)
    return (
        <Popup className={styles.popup} visible={visible} onPopupClose={onPopupClose}>
            <div className={styles.main}>
                <Form className={styles.form} header='Add a new tail:' headerClassName={styles.header}>
                    <Input
                        label='Name:'
                        id='name' 
                        name='name'
                        maxLength={20}
                        className={styles.inputName}
                        required
                        // value={loginValue}
                        // onChange={onLoginChange}
                    />
                    <Select label='Which type your tail is?' id='type' name='type' options={PET_TYPE} />
                    <Input
                        label='Date of birth:'
                        id='birthDate' 
                        name='birthDate'
                        type='date'
                        required
                        // value={loginValue}
                        // onChange={onLoginChange}
                    />
                    <Select label='Gender:' id='gender' name='gender' options={GENDER} />
                    <legend className={styles.radioQuestion}>Is neutured?</legend>
                    <section className={styles.radioSection}>
                        <RadioGroup
                            name="neutured" 
                            value={value}
                            options={NEUTURED_OPTIONS}
                            onChange={isHandleChecked}
                        />
                        {/* <RadioGroup 
                            id="notNeutured"
                            name="neutured" 
                            value="false"
                            text="No"
                            checked={value === "false"}
                            onChange={isHandleChecked}
                        /> */}
                    </section>
                    <Button className={styles.button} type='submit'>Save new tail</Button>
                </Form>
            </div>
        </Popup>
    )
}