// const { emailTemplate } = require('./js-foundation/01-template.js');
// const { getUserById } = require('./js-foundation/04-arrow-fns.js')
// require('./js-foundation/02-destructuring')
// require('./js-foundation/05-factory-functions')

// function greeting(user) {
//     const { name, age } = user;

//     return `Hi, ${name}, u're ${age} years welcome to my company`
// }

// const janeUser = getUserById(5, greeting);

// console.log(janeUser)

// console.log('Hi from the moon ', emailTemplate )


/* Factory Functions */
// const { getAge, getUUID } = require('./plugins'); // Adapters
// const { buildMakePerson } = require('./js-foundation/05-factory-functions') // Factory Function

// const buildPerson = buildMakePerson({ getAge, getUUID })

// const SAMPLE_PERSON = {
//     name: 'John Doe (New)',
//     birthdate: '1985-10-21'
// }

// const johnDoe = buildPerson(SAMPLE_PERSON)

// console.log(johnDoe)


/* Promises */
// const getPokemonById = require('./js-foundation/06-promises')

// ❌3
// const pokemonName = getPokemonById(11, (pokemon) => {
//     console.log(`Callback hell calling ${pokemon.name}`)
// })

// 🙂1
// const pokemonName = getPokemonById(11)
//     .then(data => console.log('dt ', data.name))
//     .catch(err => { throw new Error(err) })

// console.debug('pokemonName v1 ', pokemonName )


/* Async Await */
import { httpClientPlugin } from './plugins/http-client.plugin.js'; // Adapters

import getPokemonById from './js-foundation/07-async-await.js';

// 🙂1
// const sampleAAFn = async () => {
//     const pokemon = await getPokemonById(11)

//     console.debug('pokemonName v2 ', pokemon.name )
// };

//sampleAAFn();

// 🙂2

const pokemon = await getPokemonById(11, httpClientPlugin);

console.log(pokemon.name)

/* Logger */
import { buildLogger } from './plugins/logger.plugin.js';

const logger = buildLogger('app.js');

logger.log('Hi from the moon v2')

