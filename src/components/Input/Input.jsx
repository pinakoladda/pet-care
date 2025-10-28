import React from 'react'
import cn from 'classnames'
import styles from './index.module.css'

export const Input = ({
    className,
    label,
    id,
    ref,
    inputDetails,
    labelClassName,
    ...props
}) => {
    return (
        <>
            {label ? (
                <label
                    className={cn(styles.label, labelClassName)}
                    htmlFor={id}
                >
                    {label}
                </label>
            ) : (
                ''
            )}
            <input
                ref={ref}
                className={cn(
                    styles.input,
                    className,
                    inputDetails ? styles.inputDetails : ''
                )}
                id={id}
                {...props}
            />
        </>
    )
}
