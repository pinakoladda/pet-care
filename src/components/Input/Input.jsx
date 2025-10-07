import cn from 'classnames';
import styles from './index.module.css';

export const Input = ({ className, label, id, ...props }) => {
    return(
        <>
            <label className={styles.label} htmlFor={id}>{label}</label>
            <input className={cn(styles.input, className)} id={id} {...props} />
        </>
    )
}