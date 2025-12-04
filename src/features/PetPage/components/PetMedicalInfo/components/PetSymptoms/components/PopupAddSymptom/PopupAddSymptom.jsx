import { Popup } from '@/components/Popup'
import styles from './index.module.css'
import { Form } from '@/components/Form'
import { TextArea } from '@/components/TextArea'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { useAddPetSymptom } from '../../hooks/useAddSymptom'

export const PopupAddSymptom = ({ petId, ...props }) => {
    const { fields, onSubmit } = useAddPetSymptom({
        petId,
        onPopupClose: props.onPopupClose,
    })
    return (
        <Popup {...props}>
            <Form onSubmit={onSubmit}>
                <h4 className={styles.header}>Add symptom:</h4>
                <TextArea {...fields.symptom} />
                <Input id="date" type="date" {...fields.date} />
                <Button type="submit" styleType="primary">
                    Save
                </Button>
            </Form>
        </Popup>
    )
}
// предлагаемые симптомы внизу строкой
