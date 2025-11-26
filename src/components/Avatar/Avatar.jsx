import { Pencil } from 'lucide-react'
import styles from './index.module.css'
import cn from 'classnames'

export const Avatar = ({ className, src, glowing, isEditable }) => {
    return (
        <label
            className={styles.container}
            data-is-editable={isEditable}
            htmlFor="file"
        >
            {isEditable && (
                <Pencil
                    size={28}
                    strokeWidth={1.25}
                    className={styles.editImg}
                />
            )}
            <img
                src={src}
                className={cn(
                    styles.avatar,
                    className,
                    glowing ? styles.glowing : ''
                )}
            />
            <input type="file" id="file" className={styles.input} />
        </label>
    )
}
