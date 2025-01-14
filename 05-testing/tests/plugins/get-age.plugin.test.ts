import { describe, expect, jest, test } from '@jest/globals';
import { getAge } from '../../src/plugins/get-age.plugin';

describe('plugins/get-age', () => {
    test('getAge() should return the age of a person', () => {
        const BIRTHDATE = '1980-09-17'

        const ageResponse = getAge(BIRTHDATE)

        expect(typeof ageResponse).toBe('number')
    })

    test('getAge() should return 0 year', () => {
        const BIRTHDATE = '1990-09-15'

        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1990) // Allow to spy and manipulate a function

        const ageResponse = getAge(BIRTHDATE)

        expect(ageResponse).toBe(0)
        expect(spy).toHaveBeenCalled()
    })

    test('getAge() with birthdate should throw error', () => {
        const UNDEFINED_PARAM = undefined
        const MESSAGE_ERROR = 'The birthdate does not exist'

        try {
            getAge(UNDEFINED_PARAM as any)
        } catch(error) {
            const typedError = error as Error

            expect(typedError.message).toBe(MESSAGE_ERROR)
        }
    })
})
