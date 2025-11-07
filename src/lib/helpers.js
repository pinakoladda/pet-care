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
        return Math.floor(value / 1000)
    }
    if (measure === 'pounds') {
        return Math.floor(value / 453.6)
    }
    throw new Error('unsupported measure: ' + measure)
}
