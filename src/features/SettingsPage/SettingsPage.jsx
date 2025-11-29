import React from 'react'
import { Header } from '@/components/Header'
import { Loader } from '@/components/Loader'
import { ProfileInfo } from '@/components/ProfileInfo'
import { RadioGroup } from '@/components/RadioGroup'
import { ChangePasswordForm } from './components/ChangePasswordForm'
import { useGlobalContext } from '@/contexts/GlobalContext'
import styles from './index.module.css'
import { Select } from '@/components/Select'
import { Trans } from '@lingui/react/macro'

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

const LANGUAGES = [
    { value: 'en', text: 'English' },
    { value: 'de', text: 'German' },
    { value: 'fr', text: 'French' },
    { value: 'ja', text: 'Japanese' },
    { value: 'ru', text: 'Russian' },
    { value: 'ua', text: 'Ukrainian' },
    { value: 'pl', text: 'Polish' },
]

export const SettingsPage = () => {
    const {
        state: { theme, measure, lang, user, isLoading },
        actions: { setTheme, setMeasure, setLang },
    } = useGlobalContext()

    const onChangeTheme = (event) => {
        setTheme(event.target.value)
    }
    const onChangeMeasure = (event) => {
        setMeasure(event.target.value)
    }
    const onChangeLang = (event) => {
        setLang(event.target.value)
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
                                    <Trans>Choose app color-theme:</Trans>
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
                                    <Trans>
                                        Choose your preferred measure:
                                    </Trans>
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
                            <div className={styles.languageContainer}>
                                <h4 className={styles.header}>
                                    <Trans>Choose page language:</Trans>
                                </h4>
                                <Select
                                    options={LANGUAGES}
                                    className={styles.languageSelect}
                                    value={lang}
                                    onChange={onChangeLang}
                                />
                            </div>
                        </section>
                    </div>
                </>
            )}
        </main>
    )
}
