import { defineConfig } from '@lingui/cli'

export default defineConfig({
    sourceLocale: 'en',
    locales: ['de', 'fr', 'es', 'ja', 'ru', 'ua', 'en', 'pl'],
    compileNamespace: 'json',
    catalogs: [
        {
            path: '<rootDir>/src/locales/{locale}/messages',
            include: ['src'],
        },
    ],
})
