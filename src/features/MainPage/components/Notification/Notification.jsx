import { useGetEvents } from '@/lib/api/medicine'
import styles from './index.module.css'
import { format } from 'date-fns'
import { PopupEditNotification } from './components/PopupEditNotification'
import { usePopupProps } from '@/hooks/usePopupProps'
import React from 'react'

export const Notification = () => {
    const { data = [] } = useGetEvents()
    const editNotificationPopupProps = usePopupProps()

    const [selectedMedicine, setSelectedMedicine] = React.useState('')
    if (data.length === 0) {
        return null
    }

    const onEventClick = (medicineId) => () => {
        editNotificationPopupProps.onPopupOpen()
        setSelectedMedicine(medicineId)
    }

    return (
        <section className={styles.main}>
            <h4 className={styles.header}>Upcoming events:</h4>
            <section className={styles.notification}>
                {data &&
                    data.map((event) => {
                        return (
                            <p
                                key={event._id}
                                className={styles.message}
                                onClick={onEventClick(event._id)}
                            >
                                {event.petId.name +
                                    ' next ' +
                                    event.type +
                                    ' scheduled at ' +
                                    format(event.nextDate, 'dd/MM/yyyy')}
                            </p>
                        )
                    })}
            </section>
            <PopupEditNotification
                {...editNotificationPopupProps}
                medicineId={selectedMedicine}
            />
        </section>
    )
}
