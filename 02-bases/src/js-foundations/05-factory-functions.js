/*

    Factory Functions

    They're functions that create another functions

    
    Adapter Pattern

    Implementation that adapts third-party code from our code

*/

const buildMakePerson = ({ getUUID, getAge }) => {
    return ({ name, birthdate }) => {
        return {
            id: getUUID(),
            name,
            birthdate,
            age: getAge(birthdate)
        }
    } 
}

module.exports = {
    buildMakePerson
}
