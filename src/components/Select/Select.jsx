import styles from './index.module.css';

export const Select = ({ label, id, options }) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <select className={styles.select}>
                <option className={styles.option}>---</option>
                {options?.map((option) => <option className={styles.option} key={option.value} value={option.value}>{option.text}</option>)}
            </select>

        </>
    )
}
