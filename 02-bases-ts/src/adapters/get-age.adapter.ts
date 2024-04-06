/* Adapter of get-age with the Adapter Pattern */
// import getAgePlugin from 'get-age';

const getAge = (birthdate: string) => {
    if(!birthdate) return new Error('Birthdate does not exist')

    return new Date().getFullYear() - new Date(birthdate).getFullYear()
}

export {
    getAge,
}