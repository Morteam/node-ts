import {describe, expect, test} from '@jest/globals';
import {ServerApp} from '@/presentation/server-app'

describe('ServerApp', () => { // fs.rmSync('outputs', {recursive: true})
    test('Should create a ServerApp instance', () => {
        const serverInstance = new ServerApp()

        expect(serverInstance).toBeInstanceOf(ServerApp)
        expect(typeof ServerApp).toBe('function')
    })
})
