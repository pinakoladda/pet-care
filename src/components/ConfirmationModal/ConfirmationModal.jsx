import { Button } from '../Button'
import { Popup } from '../Popup'
import cn from 'classnames'
import styles from './index.module.css'
import { Trans } from '@lingui/react/macro'

export const ConfirmaitionModal = ({
    header,
    onPopupClose,
    visible,
    onConfirm,
    disabled,
}) => {
    return (
        <Popup
            visible={visible}
            onPopupClose={onPopupClose}
            disabled={disabled}
        >
            <section className={styles.main}>
                <h4 className={styles.header}>{header}</h4>
                <div className={styles.container}>
                    <Button
                        disabled={disabled}
                        onClick={onConfirm}
                        className={cn(styles.button, styles.confirmButton)}
                    >
                        <Trans>yes</Trans>
                    </Button>
                    <Button
                        disabled={disabled}
                        onClick={onPopupClose}
                        className={styles.button}
                    >
                        <Trans>no</Trans>
                    </Button>
                </div>
            </section>
        </Popup>
    )
}
