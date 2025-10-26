import { Header } from '@/components/Header'
import { Loader } from '@/components/Loader'
import styles from './index.module.css'
import { ProfileInfo } from '@/components/ProfileInfo'
import React from 'react'
import { RadioGroup } from '@/components/RadioGroup'
import { ChangePasswordForm } from './components/ChangePasswordForm'
import { useGlobalContext } from '@/contexts/GlobalContext'

const THEME_OPTIONS = [
    {
        value: 'light',
        text: 'light',
    },
    {
        value: 'dark',
        text: 'dark',
    },
]

export const SettingsPage = () => {
    const {
        state: { theme, user, isLoading },
        actions: { setTheme },
    } = useGlobalContext()

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
                    <ProfileInfo userData={user} />
                    <div className={styles.container}>
                        <ChangePasswordForm userData={user} />
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
