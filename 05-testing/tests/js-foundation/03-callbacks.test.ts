import { describe, expect, test } from '@jest/globals';
import { USERS } from '../../src/data/users.data';
import { getUserById } from '../../src/js-foundation/03-callbacks';

describe('js-foundation/03-callbacks', () => {
    test('getUserById should throw an error if user does not exist', () => {
        const USER_ID = 11;

        try {
            getUserById(USER_ID, (user) => console.log(user));
        } catch(error) {
            expect(error).toBeInstanceOf(Error);
        }
    })

    test('getUserById should return an existent user', (done) => {
        const USER_ID = 5;
        const finalUser = USERS.find((user) => USER_ID === user.id)

        getUserById(USER_ID, (user) => {
            expect(user).toEqual(finalUser);
            done() // Usefull just for wait the execution of callbacks NO promises, due to lexical scoping
        });
    })
});