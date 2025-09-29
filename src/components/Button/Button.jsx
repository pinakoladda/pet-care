import styles from './index.module.css'
import cn from 'classnames'

export const Button = ({children, className, as, ...props}) => {
    const Component = as || 'button';
    return (
        <>
        <Component className={cn(styles.button, className)} {...props}>{children}</Component>
        </>
    )
}