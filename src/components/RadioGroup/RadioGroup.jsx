import cn from 'classnames'
import styles from './index.module.css'

export const RadioGroup = ({
    options,
    name,
    onChange,
    value,
    radioClassName,
}) => {
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
                    radioClassName={radioClassName}
                />
            ))}
        </>
    )
}

export const Radio = ({ text, id, radioClassName, ...props }) => {
    return (
        <div className={cn(styles.main, radioClassName)}>
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
