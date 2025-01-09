// console.log(process); // Data about Node processes (running libraries, inner processes, ...)
// console.log(process.title);

const { TERM_PROGRAM, HOMEPATH, OS } = process.env;

// console.log({ TERM_PROGRAM, HOMEPATH, OS })

export const FRUITS:string[] = ['Peach', 'Apple', 'Banana', 'Strawberry', 'Pear'];

const [, , , , PEAR] = FRUITS;
