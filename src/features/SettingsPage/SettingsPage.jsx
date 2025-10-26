import { Header } from '@/components/Header'
import { useAuth } from '@/lib/api'
import { Loader } from '@/components/Loader'
import styles from './index.module.css'
import { ProfileInfo } from '@/components/ProfileInfo'
import React from 'react'
import { RadioGroup } from '@/components/RadioGroup'
import { ChangePasswordForm } from './components/ChangePasswordForm'

const THEME_OPTIONS = [
    {
        value: 'white',
        text: 'white',
    },
    {
        value: 'dark',
        text: 'dark',
    },
]

export const SettingsPage = () => {
    const { isLoading, data } = useAuth()
    const [theme, setTheme] = React.useState('dark')

    const onChange = (event) => {
        setTheme(event.target.value)
    }

    return (
        <main className={styles.settingsPage}>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <Header page="settings" />
                    <ProfileInfo userData={data} />
                    {/* <h3>User name: {data.name}</h3>
                    <p>Login: {data.login}</p>
                    <p>Gender: {data.gender}</p> */}
                    <div className={styles.container}>
                        <ChangePasswordForm userData={data} />
                        <div className={styles.themeContainer}>
                            <h4 className={styles.themeHeader}>
                                Choose app color-theme:
                            </h4>
                            <div className={styles.radioContainer}>
                                <RadioGroup
                                    className={styles.radio}
                                    name="theme"
                                    options={THEME_OPTIONS}
                                    value={theme}
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </main>
    )
}
