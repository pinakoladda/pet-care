import React from 'react';
import cn from 'classnames';
import styles from './index.module.css';

export const Input =({ className, label, id, ref, inputDetails, ...props }) => {
    return (
        <>
            <label className={styles.label} htmlFor={id}>{label}</label>
            <input ref={ref} className={cn(styles.input, className, inputDetails ? styles.inputDetails : '')} id={id} {...props} />
        </>
    )
}