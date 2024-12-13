const { emailTemplate } = require('./js-foundation/01-template');
const { getUserById } = require('./js-foundation/04-arrow-fns')
require('./js-foundation/02-destructuring')

function greeting(user) {
    const { name, age } = user;

    return `Hi, ${name}, u're ${age} years welcome to my company`
}

const janeUser = getUserById(5, greeting);

console.log(janeUser)

// console.log('Hi from the moon ', emailTemplate )
