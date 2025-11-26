import { Popup } from '@/components/Popup'
import { Form } from '@/components/Form'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { Select } from '@/components/Select'
import { ErrorMessage } from '@/components/ErrorMessage'
import { TextArea } from '@/components/TextArea'
import { useAddTreatment } from '../../hooks/useAddTreatment'
import cn from 'classnames'
import styles from './index.module.css'

const REPEAT_OPTIONS = [
    { value: 'once', text: 'once' },
    { value: 'day', text: 'day' },
    { value: 'week', text: 'week' },
    { value: 'month', text: 'month' },
    { value: 'year', text: 'year' },
]

const REPEAT_OPTIONS_VALUE = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

export const PopupAddTreatment = ({ petId, type, ...props }) => {
    const { fields, onSubmit, errorMessage } = useAddTreatment({
        onPopupClose: props.onPopupClose,
        petId,
        type,
    })
    return (
        <Popup {...props}>
            <Form className={styles.form} onSubmit={onSubmit}>
                <h4 className={styles.header}>
                    {type === 'insects' &&
                        'Add information about treatment against fleas, ticks and mosquitoes:'}
                    {type === 'vorms' &&
                        'Add information about treatment against helmints:'}
                    {type === 'vaccination' &&
                        'Add information about vaccination:'}
                </h4>
                <div className={styles.container}>
                    <div>
                        <Input
                            label="Name of medicine:"
                            id="medicine"
                            name="medicine"
                            className={styles.input}
                            min={0}
                            {...fields.medicine}
                            required
                        />
                    </div>
                    <div>
                        <Input
                            label="Date:"
                            id="date"
                            name="date"
                            className={styles.input}
                            type="date"
                            {...fields.date}
                            required
                        />
                    </div>
                    <div>
                        <p className={styles.selectParagraph}>Repeat:</p>
                        <div className={styles.selectContainer}>
                            {fields.repeat.value === 'once' ? (
                                <Select
                                    id="repeat"
                                    name="repeat"
                                    className={cn(styles.input, styles.select)}
                                    options={REPEAT_OPTIONS}
                                    {...fields.repeat}
                                    required
                                />
                            ) : (
                                <>
                                    <Select
                                        id="repeat-value"
                                        name="repeat-value"
                                        className={styles.input}
                                        options={REPEAT_OPTIONS_VALUE}
                                        {...fields.repeatValue}
                                        required
                                        withNoneOption={false}
                                    />
                                    <Select
                                        id="repeat"
                                        name="repeat"
                                        className={cn(
                                            styles.input,
                                            styles.select
                                        )}
                                        type="repeat"
                                        options={REPEAT_OPTIONS}
                                        {...fields.repeat}
                                        required
                                    />
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className={styles.textAreaContainer}>
                    <TextArea id="textArea" {...fields.notes} label="Notes:" />
                </div>
                <ErrorMessage errorMessage={errorMessage} />
                <Button className={styles.button} type="submit">
                    Save
                </Button>
            </Form>
        </Popup>
    )
}
