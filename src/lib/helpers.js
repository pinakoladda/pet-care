export const formatDate = (value) => {
    const date = new Date(value)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const formattedMonth = month <= 9 ? '0' + month : month
    const formattedDay = day <= 9 ? '0' + day : day

    return `${year}-${formattedMonth}-${formattedDay}`
}

export const formatAge = (value) => {
    const date = new Date(value)
    const dateNow = Date.now()
    const dateOfBirth = date.getTime()
    const result = dateNow - dateOfBirth
    const age = result / (1000 * 60 * 60 * 24 * 365)

    return Math.floor(age)
}

export const convertWeightToGrams = (value, measure) => {
    if (measure === 'grams') {
        return Number(value)
    }
    if (measure === 'kilograms') {
        return value * 1000
    }
    if (measure === 'pounds') {
        return value * 453.6
    }
    throw new Error('unsupported measure: ' + measure)
}

export const convertWeight = (value, measure) => {
    if (measure === 'grams') {
        return Number(value)
    }
    if (measure === 'kilograms') {
        return Math.floor(value / 10) / 100
    }
    if (measure === 'pounds') {
        return Math.floor(value / 453.6)
    }
    throw new Error('unsupported measure: ' + measure)
}

const ZODIAC = [
    { name: 'Capricorn', from: '12-22', to: '01-19', sign: '♑' },
    { name: 'Aquarius', from: '01-20', to: '02-18', sign: '♒' },
    { name: 'Pisces', from: '02-19', to: '03-20', sign: '♓' },
    { name: 'Aries', from: '03-21', to: '04-19', sign: '♈' },
    { name: 'Taurus', from: '04-20', to: '05-20', sign: '♉' },
    { name: 'Gemini', from: '05-21', to: '06-20', sign: '♊' },
    { name: 'Cancer', from: '06-21', to: '07-22', sign: '♋' },
    { name: 'Leo', from: '07-23', to: '08-22', sign: '♌' },
    { name: 'Virgo', from: '08-23', to: '09-22', sign: '♍' },
    { name: 'Libra', from: '09-23', to: '10-22', sign: '♎' },
    { name: 'Scorpio', from: '10-23', to: '11-21', sign: '♏' },
    { name: 'Sagittarius', from: '11-22', to: '12-21', sign: '♐' },
]

export function getZodiacSign(dateString) {
    const date = new Date(dateString)
    if (isNaN(date)) return null

    const month = date.getMonth() + 1
    const day = date.getDate()
    const md = `${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`

    for (const z of ZODIAC) {
        if (z.from <= z.to) {
            if (md >= z.from && md <= z.to) {
                return { name: z.name, sign: z.sign }
            }
        } else {
            if (md >= z.from || md <= z.to) {
                return { name: z.name, sign: z.sign }
            }
        }
    }

    return null
}
