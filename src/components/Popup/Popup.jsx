import styles from './index.module.css';
import cn from 'classnames';

export const Popup = ({ visible, onPopupClose, children }) => {
    return (
        <div className={cn(styles.main, visible ? styles.mainVisible : '' )}>
            <div className={styles.overlay} onClick={onPopupClose}></div>
            <div className={styles.content}>{children}</div>
        </div>
    )
}