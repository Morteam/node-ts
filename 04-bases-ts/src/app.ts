import { User } from './data/users.data';

// import { emailTemplate } from './js-foundation/01-template';

// console.debug(emailTemplate);


// import { getUserById } from './js-foundation/03-callbacks';

import { getUserById } from './js-foundation/04-arrow-fns';

getUserById(5, (user:User) => {
    console.log(`Sample user: ${user?.name}`)
});


import { getAge, getUUID, httpClientPlugin } from './plugins';

getAge('1985-10-21');


import { buildMakePerson } from './js-foundation/05-factory-functions';

const SAMPLE_PERSON = {
    name: 'John Doe (New)',
    birthdate: '1985-10-21'
}

const buildPerson = buildMakePerson({ getAge, getUUID });
const johnDoe = buildPerson(SAMPLE_PERSON)

console.log(johnDoe);


// import { getPokemonById } from './js-foundation/06-promises';
import { getPokemonById } from './js-foundation/07-async-await';

//const pokemonName = getPokemonById(11, httpClientPlugin) // Promises
const pokemonName = getPokemonById(14, httpClientPlugin) // Async-await
    .then(data => console.log('dt ', data.name))
    .catch(err => { throw new Error(err) })
