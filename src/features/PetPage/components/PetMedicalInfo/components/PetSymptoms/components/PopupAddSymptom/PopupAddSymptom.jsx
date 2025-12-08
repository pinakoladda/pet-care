import { Popup } from '@/components/Popup'
import styles from './index.module.css'
import { Form } from '@/components/Form'
import { TextArea } from '@/components/TextArea'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { useAddPetSymptom } from '../../hooks/useAddSymptom'
import { ErrorMessage } from '@/components/ErrorMessage'

const HOT_SYMPTOMS = [
    'vomiting',
    'diarrhea',
    'loss of appetite',
    'itching',
    'skin rash',
    'limping',
    'swelling',
    'dehydration',
    'aggression or behavior changes',
    'ear scratching',
    'bad breath',
]

export const PopupAddSymptom = ({ petId, type, ...props }) => {
    const { fields, onSubmit, errorMessage, setSymptom } = useAddPetSymptom({
        petId,
        onPopupClose: props.onPopupClose,
        type,
    })

    const onHotSymptomClick = (symptom) => () =>
        setSymptom((v) =>
            [v, symptom].filter((item) => item.length > 0).join(', ')
        )

    return (
        <Popup {...props}>
            <Form onSubmit={onSubmit}>
                <h4 className={styles.header}>Add symptom:</h4>
                <TextArea {...fields.symptom} />
                <Input id="date" type="date" {...fields.date} />
                <div className={styles.container}>
                    {HOT_SYMPTOMS.map((symptom) => {
                        return (
                            <p
                                key={symptom}
                                onClick={onHotSymptomClick(symptom)}
                                className={styles.paragraph}
                            >
                                {symptom}
                            </p>
                        )
                    })}
                </div>
                <Button type="submit" styleType="primary">
                    Save
                </Button>
                <ErrorMessage errorMessage={errorMessage} />
            </Form>
        </Popup>
    )
}
// предлагаемые симптомы внизу строкой
