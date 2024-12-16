const { emailTemplate } = require('./js-foundation/01-template');
const { getUserById } = require('./js-foundation/04-arrow-fns')
require('./js-foundation/02-destructuring')
// require('./js-foundation/05-factory-functions')

function greeting(user) {
    const { name, age } = user;

    return `Hi, ${name}, u're ${age} years welcome to my company`
}

const janeUser = getUserById(5, greeting);

console.log(janeUser)

// console.log('Hi from the moon ', emailTemplate )

/* Factory Functions */
const { getAge, getUUID } = require('./plugins'); // Adapters
const { buildMakePerson } = require('./js-foundation/05-factory-functions') // Factory Function

const buildPerson = buildMakePerson({ getAge, getUUID })

const SAMPLE_PERSON = {
    name: 'John Doe (New)',
    birthdate: '1985-10-21'
}

const johnDoe = buildPerson(SAMPLE_PERSON)

console.log(johnDoe)
