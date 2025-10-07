import { Button } from '../Button';
import styles from './index.module.css';

export const Header = () => {

    const handleLogOut = () => {
        localStorage.removeItem('token')
        window.location.href = '/login'
    }

    return (
        <header className={styles.header}>
            {/* <p>Main page</p>
            <p>My tails</p> */}
            <Button onClick={handleLogOut}>log out</Button>
        </header>
    )
}