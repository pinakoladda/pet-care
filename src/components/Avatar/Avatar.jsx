import styles from './index.module.css'
import cn from 'classnames'

export const Avatar = ({className}) => {
    return (
        <div className={cn(styles.avatar, className)}></div>
    )
}