import { Input } from '@/components/Input'
import styles from './index.module.css'
import { Popup } from '@/components/Popup'
import { Button } from '@/components/Button'
import React from 'react'
import { format } from 'date-fns'
import { Form } from '@/components/Form'
import { useAddMedicineDate } from '@/lib/api/medicine'

export const PopupEditNotification = ({ medicineId, ...props }) => {
    const [date, setDate] = React.useState(format(new Date(), 'yyyy-MM-dd'))
    const { mutateAsync: addMedicineDateFn } = useAddMedicineDate()

    const onDateChange = (event) => {
        setDate(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        addMedicineDateFn({ medicineId, date })
        props.onPopupClose()
    }

    return (
        <Popup {...props}>
            <Form
                className={styles.main}
                onSubmit={onSubmit}
                header="Event is complete? Choose the date of event:"
            >
                <Input
                    className={styles.input}
                    type="date"
                    value={date}
                    onChange={onDateChange}
                />
                <Button
                    type="submit"
                    styleType="primary"
                    className={styles.button}
                >
                    Save
                </Button>
            </Form>
        </Popup>
    )
}
