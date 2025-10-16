import React from 'react'
import { Input } from '../Input'
import { Loader } from '../Loader'
import styles from './index.module.css'

export const Suggest = ({ options, isLoading, ...props }) => {
    const [visible, setVisible] = React.useState(false)
    const inputRef = React.useRef()

    const onFocus = () => {
        setVisible(true)
    }
    const onUnFocus = () => {
        setTimeout(() => {
            setVisible(false)
        }, 100);
    }

    const onSelect = (option) => () => {
        if(inputRef?.current) {
            inputRef.current.value = option
            props.onChange({target: {value: option}})
        }
    }

    return (
        <div className={styles.main}>
            <Input {...props} onFocus={onFocus} onBlur={onUnFocus} ref={inputRef} autoComplete='off' />
            {visible && 
                <div className={styles.options}>
                    {
                        isLoading 
                            ? <Loader className={styles.loader} size={32} /> 
                            : options?.map((option) => <div key={option} onClick={onSelect(option)} className={styles.option}>{option}</div>)
                    }
                </div>
            }
        </div>
    )
}