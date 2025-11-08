import { Popup } from '@/components/Popup'
import { Form } from '@/components/Form'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import styles from './index.module.css'
import { useAddInsectsTreatment } from '../../hooks/useAddInsectsTreatment'

export const PopupAddInsectsTreatment = ({ ...props }) => {
    const { fields } = useAddInsectsTreatment()
    return (
        <Popup {...props}>
            <Form className={styles.form}>
                <h4 className={styles.header}>
                    Add information about treatment against fleas, ticks and
                    mosquitoes:
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
                        />
                    </div>
                    <div>
                        <Input
                            label="Date:"
                            id="date"
                            name="date"
                            className={styles.input}
                            type="date"
                        />
                    </div>
                    <div>
                        <Input
                            label="Comment:"
                            id="natural"
                            name="natural"
                            className={styles.input}
                        />
                    </div>
                </div>
                <Button className={styles.button} type="submit">
                    Save
                </Button>
            </Form>
        </Popup>
    )
}
