import { Header } from '@/components/Header'
import { useAuth } from '@/lib/api'
import { Loader } from '@/components/Loader'
import styles from './index.module.css'
import { ProfileInfo } from '@/components/ProfileInfo'
import React from 'react'
import { RadioGroup } from '@/components/RadioGroup'
import { useChangePassword } from './hooks/useChangePassword'
import { ErrorMessage } from '@/components/ErrorMessage'
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
    const { fields } = useChangePassword()

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
                        <ChangePasswordForm />
                        <div className={styles.themeContainer}>
                            <h4 className={styles.themeHeader}>
                                Choose app color-theme:
                            </h4>
                            <div className={styles.radioContainer}>
                                <RadioGroup
                                    className={styles.radio}
                                    name="theme"
                                    options={THEME_OPTIONS}
                                    {...fields.theme}
                                />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </main>
    )
}
