import { describe, expect, jest, test } from '@jest/globals';
import { getUUID } from '../../src/plugins/get-uuid.plugin';

describe('plugins/get-UUID', () => {
    test('getUUID() should return an id', () => {
        const resultUUID = getUUID()
        const LENGTH_ID = 36

        expect(typeof resultUUID).toBe('string')
        // option 1
        expect(resultUUID).toHaveLength(LENGTH_ID)
        // option 2
        expect(resultUUID.length).toBe(LENGTH_ID)
    })
})
