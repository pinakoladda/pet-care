import styles from './index.module.css'

export const Notification = () => {
    return (
        <>
            <section className={styles.main}>
                <h4 className={styles.header}>Upcoming events:</h4>
                <section className={styles.notification}>
                    <p className={styles.message}>Buddy's vaccination scheduled on Tuesday, 22.10, at 12:00 p.m. </p>
                    <p className={styles.message}>Give Buddy pills against parasites</p>
                    <p className={styles.message}>13:00 call doctor Mateush</p>
                </section>
            </section>
        </>
    )
}