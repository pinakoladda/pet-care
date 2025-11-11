import styles from './index.module.css'
import cn from 'classnames'

export const Select = ({ label, id, options, className, ...props }) => {
    return (
        <>
            {label ? <label htmlFor={id}>{label}</label> : ''}
            <select className={cn(styles.select, className)} {...props}>
                {!props.value && <option className={styles.option}>---</option>}
                {options?.map((option) => (
                    <option
                        className={styles.option}
                        key={option.value ? option.value : option}
                        value={option.value ? option.value : option}
                    >
                        {option.text ? option.text : option}
                    </option>
                ))}
            </select>
        </>
    )
}
