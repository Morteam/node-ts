const getAgePlugin = require('get-age');

const getAge = (birthdate) => {
    if (!birthdate) return new Error('The birthdate does not exist')
    
    return getAgePlugin(birthdate)
}

module.exports = {
    getAge
}
