import React from 'react'
import { Header } from '@/components/Header'
import { Loader } from '@/components/Loader'
import { ProfileInfo } from '@/components/ProfileInfo'
import { RadioGroup } from '@/components/RadioGroup'
import { ChangePasswordForm } from './components/ChangePasswordForm'
import { useGlobalContext } from '@/contexts/GlobalContext'
import styles from './index.module.css'

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

const MEASURE_OPTIONS = [
    {
        value: 'kilograms',
        text: 'kilograms',
    },
    {
        value: 'pounds',
        text: 'pounds',
    },
]

export const SettingsPage = () => {
    const {
        state: { theme, measure, user, isLoading },
        actions: { setTheme, setMeasure },
    } = useGlobalContext()

    const onChangeTheme = (event) => {
        setTheme(event.target.value)
    }
    const onChangeMeasure = (event) => {
        setMeasure(event.target.value)
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
                        <section className={styles.settingsContainer}>
                            <div className={styles.themeContainer}>
                                <h4 className={styles.header}>
                                    Choose app color-theme:
                                </h4>
                                <div className={styles.radioContainer}>
                                    <RadioGroup
                                        className={styles.radio}
                                        name="theme"
                                        options={THEME_OPTIONS}
                                        value={theme}
                                        onChange={onChangeTheme}
                                    />
                                </div>
                            </div>
                            <div className={styles.measureContainer}>
                                <h4 className={styles.header}>
                                    Choose your preferred measure:
                                </h4>
                                <div className={styles.radioContainer}>
                                    <RadioGroup
                                        className={styles.radio}
                                        name="measure"
                                        options={MEASURE_OPTIONS}
                                        value={measure}
                                        onChange={onChangeMeasure}
                                    />
                                </div>
                            </div>
                        </section>
                    </div>
                </>
            )}
        </main>
    )
}
