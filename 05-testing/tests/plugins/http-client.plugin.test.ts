import { describe, expect, jest, test } from '@jest/globals';
import { httpClientPlugin } from '../../src/plugins/http-client.plugin';

describe('plugins/http-client', () => {
    test('httpClientPlugin.get() should return an string', async () => {
        const EDNPOINT = 'https://jsonplaceholder.typicode.com/todos/1'
        const response = await httpClientPlugin.get(EDNPOINT)

        expect(response).toEqual({
            userId: expect.any(Number),
            id: expect.any(Number),
            title: expect.any(String),
            completed: expect.any(Boolean)
        })
    })

    test('httpClientPlugin should have post, put and delete methods', () => {
        const {delete: deleteMethod, post, put} = httpClientPlugin;

        expect(typeof deleteMethod).toBe('function')
        expect(typeof post).toBe('function')
        expect(typeof put).toBe('function')
    })
})