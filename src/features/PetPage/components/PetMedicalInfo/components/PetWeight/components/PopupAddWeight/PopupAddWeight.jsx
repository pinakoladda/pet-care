import { useAddWeight } from '@/features/PetPage/components/PetMedicalInfo/components/PetWeight/hooks/useAddWeight'
import { Button } from '@/components/Button'
import { ErrorMessage } from '@/components/ErrorMessage'
import { Form } from '@/components/Form'
import { Input } from '@/components/Input'
import { Popup } from '@/components/Popup'
import { Select } from '@/components/Select'
import styles from './index.module.css'

const OPTIONS = [
    { value: 'kilograms', text: 'kg' },
    { value: 'grams', text: 'g' },
    { value: 'pounds', text: 'lb' },
]

export const PopupAddWeight = ({ petId, ...props }) => {
    const { fields, onAddWeightSubmit, errorMessage } = useAddWeight({
        petId,
        onPopupClose: props.onPopupClose,
    })
    return (
        <Popup {...props}>
            <Form onSubmit={onAddWeightSubmit}>
                <div className={styles.container}>
                    <h4 className={styles.header}>Add weight:</h4>
                    <div className={styles.inputContainer}>
                        <div className={styles.weihtContainer}>
                            <Input
                                id="current-weight"
                                name="current-weight"
                                className={styles.input}
                                {...fields.currentWeight}
                                min={0}
                            />
                            <Select
                                options={OPTIONS}
                                className={styles.select}
                                {...fields.measure}
                            />
                        </div>
                        <Input
                            id="weightDate"
                            name="weightDate"
                            className={styles.inputDate}
                            type="date"
                            {...fields.date}
                        />
                    </div>
                    <ErrorMessage errorMessage={errorMessage} />
                    <Button className={styles.button} type="submit">
                        Save
                    </Button>
                </div>
            </Form>
        </Popup>
    )
}
