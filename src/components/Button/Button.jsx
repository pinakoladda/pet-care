import styles from './index.module.css'
import cn from 'classnames'

export const Button = ({ children, className, styleType, as, ...props }) => {
    const Component = as || 'button'
    return (
        <>
            <Component
                className={cn(
                    styles.button,
                    className,
                    styleType === 'primary' ? styles.buttonPrimary : '',
                    styleType === 'transparent' ? styles.buttonTransparent : '',
                    styleType === 'link' ? styles.buttonLink : ''
                )}
                {...props}
            >
                {children}
            </Component>
        </>
    )
}
