import { X } from 'lucide-react';
import { Button } from '../Button';
import styles from './index.module.css';
import cn from 'classnames';

export const Popup = ({ visible, onPopupClose, children, disabled }) => {
    return (
        <div className={cn(styles.main, visible ? styles.mainVisible : '' )}>
            <div className={styles.overlay} onClick={disabled ? undefined : onPopupClose}></div>
            <div className={styles.content}>
                <Button 
                    disabled={disabled} 
                    onClick={onPopupClose} 
                    className={styles.closeButton}>
                        <X strokeWidth={1.5} size='28'/>
                </Button>
                {children}
            </div>
        </div>
    )
}