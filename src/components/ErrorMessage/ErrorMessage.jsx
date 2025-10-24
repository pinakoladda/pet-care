import styles from './index.module.css'

export const ErrorMessage = ({ errorMessage }) => {
    if (!errorMessage) {
        return null
    }
    return <p className={styles.errorMessage}>{errorMessage}</p>
}
