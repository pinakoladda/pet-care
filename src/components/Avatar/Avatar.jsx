import { Pencil } from 'lucide-react'
import styles from './index.module.css'
import cn from 'classnames'
import React, { useId } from 'react'
import { useUploadAvatar } from '@/lib/api/avatar'

export const Avatar = ({ className, src, glowing, isEditable, onUpload }) => {
    const id = useId()
    const inputRef = React.useRef()
    const { mutateAsync: uploadAvatar } = useUploadAvatar()

    const onChange = () => {
        const image = inputRef.current.files[0]
        uploadAvatar(image)
            .then((data) => {
                return onUpload(data.urls)
            })
            .then(() => {
                console.log('sucsess')
            })
    }

    return (
        <label
            className={styles.container}
            data-is-editable={isEditable}
            htmlFor={id}
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
            {isEditable && (
                <input
                    type="file"
                    id={id}
                    className={styles.input}
                    onChange={onChange}
                    ref={inputRef}
                />
            )}
        </label>
    )
}
