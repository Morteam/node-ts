// const { EMAIL_TEMPLATE } = require('./js-foundations/01-template');
const { getAge, getUUID } = require('./adapters');

// require('./js-foundations/01-template'); // Import and execute the file
// require('./js-foundations/02-destructuring')
// const { getUserById } = require('./js-foundations/03-callback')
// const { getUserById } = require('./js-foundations/04-arrow-functions')
// const { buildMakePerson } = require('./js-foundations/05-factory-functions');
// const { getPokemonById } = require('./js-foundations/06-promises'); // NO RECOMMENDED
// const { getPokemonById } = require('./js-foundations/06-promises--callback');
// const { getPokemonById } = require('./js-foundations/07-async-await');
const { getPokemonById } = require('./js-foundations/08-fetch-adapter');

// const USER_TO_FIND = 1

// getUserById(USER_TO_FIND, (error, user) => {
//     if(error) throw new Error(error)

//     console.log(`User is ${user.name}`)
// })

// const OBJ_SAMPLE = {
//     name: 'Joshua',
//     birthdate: '1991-04-04'
// }

// const makePerson = buildMakePerson({ getAge, getUUID });

// const joshPerson = makePerson(OBJ_SAMPLE)

// PROMISES CALLBACK, NO RECOMMENDED
// getPokemonById(2, pokemon => {
//     console.log(pokemon.name)
// })

// STRING PROMISES
// getPokemonById(23)
//     .then(name => console.log(name))

// ASYNC AWAIT
// getPokemonById(27)
//     .then(name => console.log(name))

// FETCH ADAPTER
// getPokemonById(29)
//     .then(name => console.log(name))

// FETCH ADAPTER WITH AXIOS
getPokemonById(29)
    .then(name => console.log(name))
