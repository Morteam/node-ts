import {describe, expect, test} from '@jest/globals';

const simulateRunCommand = async (args: string[]) => {
    process.argv = [...process.argv, ...args]

    const { yarg } = await import('./yargs.plugin') // Import after injecting the arguments in the proccess.arg, this is because Yarg is executed immediately when it is called (exactly at the import) and therefore the execution will fail (for example if we have mandatory flags)

    return yarg;
}

describe('Yargs plugin', () => {
    const originalArgv = process.argv

    beforeEach(() => {
        process.argv = originalArgv

        jest.resetModules() // Reset the cache memory of all required modules, this due to the const { yarg } = await import('./yargs.plugin') automatic execution
    })

    test('Should return default values', async () => {
        const argv = await simulateRunCommand(['-b', '88']);

        expect(argv).toEqual(expect.objectContaining({
            b: 88,
            l: 10,
            s: false,
            n: 'multiplication-table',
            e: 'md',
            d: 'outputs',
        }))
    })

    test('Should return config with custom values', async () => {
        const argv = await simulateRunCommand(['-b', '99', '-l', '12', '-s', '-n', 'test-table', '-e', 'txt', '-d', 'test-outputs']);

        console.log(argv)

        expect(argv).toEqual(expect.objectContaining({
            b: 99,
            l: 12,
            s: true,
            n: 'test-table',
            e: 'txt',
            d: 'test-outputs',
        }))
    })
})