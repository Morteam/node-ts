/* Adapter of get-age with the Adapter Pattern */
const getAgePlugin = require('get-age');

const getAge = (birthdate) => {
    if(!birthdate) return new Error('Birthdate does not exist')

    return getAgePlugin(birthdate)
}

module.exports = {
    getAge,
}