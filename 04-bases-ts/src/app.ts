// import { emailTemplate } from './js-foundation/01-template';

// console.debug(emailTemplate);


import { User } from './data/users.data';
// import { getUserById } from './js-foundation/03-callbacks';
import { getUserById } from './js-foundation/04-arrow-fns';

getUserById(5, (user:User) => {
    console.log(`Sample user: ${user?.name}`)
});
