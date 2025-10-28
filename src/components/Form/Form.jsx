import styles from './index.module.css'
import cn from 'classnames'

export const Form = ({
    children,
    className,
    header,
    headerClassName,
    ...props
}) => {
    return (
        <form className={cn(styles.form, className)} {...props}>
            {header ? (
                <h3 className={cn(styles.header, headerClassName)}>{header}</h3>
            ) : (
                ''
            )}
            {children}
        </form>
    )
}
