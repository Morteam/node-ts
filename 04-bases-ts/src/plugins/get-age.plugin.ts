import getAgePlugin from 'get-age';

export const getAge = (birthdate:string):number|Error => {
    if (!birthdate) return new Error('The birthdate does not exist')
    
    return getAgePlugin(birthdate)
}
