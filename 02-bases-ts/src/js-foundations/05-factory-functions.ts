/*

    Factory Functions

    They're functions that create another functions

    
    Adapter Pattern

    Implementation that adapts third-party code from our code

*/
interface BuildMakePersonProps {
    getUUID: () => number
    getAge: (birthdate: string) => string
}

interface PersonProps {
    name: string
    birthdate: string
}

const buildMakePerson = ({ getUUID, getAge }: BuildMakePersonProps) => {
    return ({ name, birthdate }: PersonProps) => {
        return {
            id: getUUID(),
            name,
            birthdate,
            age: getAge(birthdate)
        }
    } 
}

export {
    buildMakePerson
}
