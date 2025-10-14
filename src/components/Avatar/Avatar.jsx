import styles from './index.module.css'
import cn from 'classnames'

export const Avatar = ({ className, src, glowing }) => {
    return (
            <img src={src} className={cn(styles.avatar, className, glowing ? styles.glowing : '')}></img>
    )
}