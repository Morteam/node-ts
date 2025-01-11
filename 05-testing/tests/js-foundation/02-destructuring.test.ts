import { describe, expect, test } from '@jest/globals';
import { FRUITS } from '../../src/js-foundation/02-destructuring';

describe('js-foundation/02-destructuring', () => {

    test('FRUITS should contain Strawberry', () => {
        const STRAWBERRY = 'Strawberry'

        expect(FRUITS).toContain(STRAWBERRY)
    })

    test('First fruit should be Peach', () => {
        const PEACH = 'Peach'
        const [_first] = FRUITS;

        expect(_first).toBe(PEACH)
    })

})
