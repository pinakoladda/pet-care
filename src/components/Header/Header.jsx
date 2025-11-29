import { Trans } from '@lingui/react/macro'
import { Button } from '../Button'
import styles from './index.module.css'
import cn from 'classnames'

export const Header = ({ page }) => {
    const handleLogOut = () => {
        localStorage.removeItem('token')
        window.location.href = '/login'
    }

    return (
        <header className={styles.header}>
            <Button
                as="a"
                className={cn(styles.link, {
                    [styles.disabledLink]: page === 'mainPage',
                })}
                href="/"
            >
                <Trans>main page</Trans>
            </Button>
            <Button
                as="a"
                href="/settings"
                className={cn(styles.link, {
                    [styles.disabledLink]: page === 'settings',
                })}
            >
                <Trans>settings</Trans>
            </Button>
            <Button className={styles.link} onClick={handleLogOut}>
                <Trans>log out</Trans>
            </Button>
        </header>
    )
}
