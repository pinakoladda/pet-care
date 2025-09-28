import styles from './index.module.css'
import cn from 'classnames'

export const Button = ({children, className, ...props}) => {
    return (
        <>
        <button className={cn(styles.button, className)} {...props}>{children}</button>
        </>
    )
}