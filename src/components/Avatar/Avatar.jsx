import { Pencil } from 'lucide-react'
import styles from './index.module.css'
import cn from 'classnames'
import React from 'react'
import { useUploadAvatar } from '@/lib/api/avatar'

export const Avatar = ({ className, src, glowing, isEditable, onUpload }) => {
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
            <input
                type="file"
                id="file"
                className={styles.input}
                onChange={onChange}
                ref={inputRef}
            />
        </label>
    )
}
