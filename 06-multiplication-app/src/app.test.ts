import {describe, expect, test} from '@jest/globals';
import { ServerApp } from './presentation/server-app';

describe('app.ts', () => {
    const originalArgv = process.argv

    afterEach(() => {
        process.argv = originalArgv

        jest.resetModules() // Reset the cache memory of all required modules, this due to the const { yarg } = await import('./yargs.plugin') automatic execution
    })

    test('Should call Server run with values', async () => {
        process.argv = [...process.argv, '-b', '8', '-l', '5', '-d', 'output-tmp', '-e', 'txt', '-n', 'tmp-table', '-s', 'false']
        const serverAppMock = jest.fn()
        ServerApp.run = serverAppMock;

        await import('./app'); // We need to execute it in this order cause main function inside app run like IIFE

        expect(serverAppMock).toHaveBeenCalledTimes(1)
        expect(serverAppMock).toHaveBeenCalledWith({
            base: 8,
            limit: 5,
            destination: 'output-tmp',
            extension: 'txt',
            filename: 'tmp-table',
            showTable: false
        })
    })
})