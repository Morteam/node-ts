import yargs from 'yargs/yargs'; // Allows us to work more easy with argv
import { hideBin } from 'yargs/helpers'; // Hide the Node bin path that appear in the start of the process.argv array

export const yarg = yargs(hideBin(process.argv))
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true, // Tht flag 'b' will be mandatory
        description: 'The multiplication table base'
    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        default: 10,
        description: 'The multiplication table limit',
    })
    .option('s', {
        alias: 'show',
        type: 'boolean',
        default: false,
        description: 'Show multiplication table',
    })
    .check((argv, _options) => { // Validations
        const { b } = argv

        if (b < 0) throw new Error('Error: The base does not less than 0')

        return true
    })
    .parseSync();
