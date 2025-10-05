import styles from './index.module.css';
import cn from 'classnames';

export const Form = ({ children, className, header, ...props }) => {
    return (
        <div className={styles.container}>
            <form className={cn(className, styles.form)} {...props}>
                <h3 className={styles.header}>{header}</h3>
                {children}
            </form>
        </div>
    )
}