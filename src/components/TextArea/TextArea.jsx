import styles from './index.module.css'
export const TextArea = ({ id, label, ...props }) => {
    return (
        <>
            {label ? (
                <label className={styles.label} htmlFor={id}>
                    {label}
                </label>
            ) : (
                ''
            )}
            <textarea className={styles.textArea} id={id} {...props} />
        </>
    )
}
