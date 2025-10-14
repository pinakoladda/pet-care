import { Button } from '../Button';
import { Popup } from '../Popup';
import cn from 'classnames';
import styles from './index.module.css';

export const ConfirmaitionModal = ({ header, onPopupClose, visible, onConfirm, disabled }) => {
    return (
            <Popup visible={visible} onPopupClose={onPopupClose} disabled={disabled}>
                <section className={styles.main}>
                    <h4 className={styles.header}>{header}</h4>
                    <div className={styles.container}>   
                        <Button disabled={disabled} onClick={onConfirm} className={cn(styles.button, styles.confirmButton)}>yes</Button>
                        <Button disabled={disabled} onClick={onPopupClose} className={styles.button}>no</Button>
                    </div>
                </section>
            </Popup>
    )
}