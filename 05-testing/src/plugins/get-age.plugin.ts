import getAgePlugin from 'get-age';

export const getAge = (birthdate:string):number|Error => {
    if (!birthdate) return new Error('The birthdate does not exist')
    
    // return getAgePlugin(birthdate)

    return new Date().getFullYear() - new Date(birthdate).getFullYear()
}