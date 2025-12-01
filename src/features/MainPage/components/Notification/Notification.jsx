import { useGetEvents } from '@/lib/api/medicine'
import styles from './index.module.css'
import { format, differenceInDays, isPast } from 'date-fns'
import { PopupEditNotification } from './components/PopupEditNotification'
import { usePopupProps } from '@/hooks/usePopupProps'
import React from 'react'
import { Button } from '@/components/Button'
import { MousePointerClick } from 'lucide-react'
import cn from 'classnames'
import { Trans } from '@lingui/react/macro'

const TYPE_NAMES = {
    vorms: 'anti-helmints treatment',
    insects: 'anti-insects treatment',
    vaccinations: 'vaccination',
}

export const Notification = () => {
    const { data = [] } = useGetEvents()
    const editNotificationPopupProps = usePopupProps()

    const [selectedMedicine, setSelectedMedicine] = React.useState('')
    if (data.length === 0) {
        return null
    }

    const closeEvents = data.filter((event) => {
        const diff = differenceInDays(event.nextDate, Date.now())
        return diff <= 30
    })

    const onEventClick = (medicineId) => () => {
        editNotificationPopupProps.onPopupOpen()
        setSelectedMedicine(medicineId)
    }

    return (
        <section className={styles.main}>
            <h4 className={styles.header}>
                <Trans>Upcoming events:</Trans>
            </h4>
            <section className={styles.notification}>
                {closeEvents.map((event) => {
                    return (
                        <div
                            className={cn(styles.messageContainer, {
                                [styles.messageExp]: isPast(event.nextDate),
                            })}
                            key={event._id + event.date}
                            onClick={onEventClick(event._id)}
                        >
                            <p className={styles.message}>
                                {event.petId.name +
                                    '`s' +
                                    ' next ' +
                                    TYPE_NAMES[event.type] +
                                    ' is scheduled for ' +
                                    format(event.nextDate, 'PPPP')}
                            </p>
                            <Button className={styles.button}>
                                <MousePointerClick
                                    size={20}
                                    strokeWidth={1.25}
                                    color={'var(--text-color-primary)'}
                                />
                            </Button>
                        </div>
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
