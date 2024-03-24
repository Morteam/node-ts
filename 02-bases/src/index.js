// const { EMAIL_TEMPLATE } = require('./js-foundations/01-template');
const { getAge, getUUID } = require('../src/plugins');

// require('./js-foundations/01-template'); // Import and execute the file
// require('./js-foundations/02-destructuring')
// const { getUserById } = require('./js-foundations/03-callback')
// const { getUserById } = require('./js-foundations/04-arrow-functions')
const { buildMakePerson } = require('./js-foundations/05-factory-functions');
const { getPokemonById } = require('./js-foundations/06-promises');

// const USER_TO_FIND = 1

// getUserById(USER_TO_FIND, (error, user) => {
//     if(error) throw new Error(error)

//     console.log(`User is ${user.name}`)
// })

const OBJ_SAMPLE = {
    name: 'Joshua',
    birthdate: '1991-04-04'
}

const makePerson = buildMakePerson({ getAge, getUUID });

const joshPerson = makePerson(OBJ_SAMPLE)

getPokemonById(2, pokemon => {
    console.log(pokemon.name)
})
