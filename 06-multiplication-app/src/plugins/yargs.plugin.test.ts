import {describe, expect, test} from '@jest/globals';

const simulateRunCommand = async (args: string[]) => {
    process.argv = [...process.argv, ...args]

    const { yarg } = await import('./yargs.plugin') // Import after injecting the arguments in the proccess.arg, this is because Yarg is executed immediately when it is called (exactly at the import) and therefore the execution will fail (for example if we have mandatory flags)

    return yarg;
}

describe('Yargs plugin', () => {
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
})