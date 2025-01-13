import { describe, expect, jest, test } from '@jest/globals';
import { getAge } from '../../src/plugins/get-age.plugin';

describe('plugins/get-age', () => {
    test('getAge() should return the age of a person', () => {
        const BIRTHDATE = '1980-09-17'

        const ageResponse = getAge(BIRTHDATE)

        expect(typeof ageResponse).toBe('number')
    })
})
