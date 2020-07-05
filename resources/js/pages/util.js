
const getLocalTime = (timeString) =>{
    let date = new Date(timeString)
    return date.getHours() + ':' +  date.getMinutes()
}
const getLocalDate = (timeString) => {
    let date = new Date(timeString)
    return date.getFullYear() + '-' + ('0'+date.getMonth()).slice(-2) + '-' + ('0'+date.getDate()).slice(-2)
}

export {getLocalTime, getLocalDate} ;
