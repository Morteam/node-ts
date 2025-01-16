import { describe, expect, jest, test } from '@jest/globals';
import { buildMakePerson } from '@/js-foundation/05-factory-functions'

describe('js-foundations/05-factory', () => {
    // Mock responses
    const MOCKED_USER = {
        id: '674ade12cd57',
        name: 'John Doe Lts',
        birthdate: '1/06/1986',
        age: 38,
    }

    // Option 1 Mocked Function with mock return
    const getAge: jest.Mock<(birthdate:string) => number|Error> = jest.fn()
    getAge.mockReturnValue(MOCKED_USER.age)
    const getUUID: jest.Mock<() => string> = jest.fn()
    getUUID.mockReturnValue(MOCKED_USER.id);

    // Option 2 Mocked Function without mock return
    const getAgeMockResult = () => MOCKED_USER.age
    const getUUIDMockResult = () => MOCKED_USER.id

    test('Should buildMakePerson return a function', () => {
        const responseBuildFunction = buildMakePerson({getAge: getAgeMockResult, getUUID: getUUIDMockResult});

        expect(typeof responseBuildFunction).toBe('function')
    })

    test('Should buildMakePerson returned function return an objected', () => {
        // Option 1
        const responseBuildFunction = buildMakePerson({getAge, getUUID});
        const responseInnerFunction = responseBuildFunction({ name: MOCKED_USER.name, birthdate: MOCKED_USER.birthdate })

        expect(responseInnerFunction).toEqual(MOCKED_USER)

        // Option 2
        const responseBuildFunction2 = buildMakePerson({getAge: getAgeMockResult, getUUID: getUUIDMockResult});
        const responseInnerFunction2 = responseBuildFunction2({ name: MOCKED_USER.name, birthdate: MOCKED_USER.birthdate })

        expect(responseInnerFunction2).toEqual(MOCKED_USER)
    })
})
