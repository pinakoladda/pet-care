import styles from './index.module.css'

export const RadioGroup = ({ options, name, onChange, value }) => {
    return (
        <>
            {options.map((option) => (
                <Radio
                    name={name}
                    id={option.value}
                    text={option.text}
                    onChange={onChange}
                    value={option.value}
                    checked={value === option.value}
                    key={option.value}
                />
            ))}
        </>
    )
}

export const Radio = ({ text, id, ...props }) => {
    return (
        <div className={styles.main}>
            <label htmlFor={id} className={styles.label}>
                {text}
            </label>
            <input
                className={styles.radio}
                type="radio"
                id={id}
                {...props}
            ></input>
        </div>
    )
}
