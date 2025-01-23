import yargs from 'yargs/yargs'; // Allows us to work more easy with argv
import { hideBin } from 'yargs/helpers'; // Hide the Node bin path that appear in the start of the process.argv array

export const yarg = yargs(hideBin(process.argv)).parseSync();
