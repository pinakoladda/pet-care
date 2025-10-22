export const formatDate = (value) => {
    const date = new Date(value)
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedMonth = month <= 9 ? '0' + month : month;
    const formattedDay = day <= 9 ? '0' + day : day;

    return `${year}-${formattedMonth}-${formattedDay}`
}