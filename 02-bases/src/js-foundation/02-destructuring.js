console.log(process); // Data about Node processes (running libraries, inner processes, ...)
console.log(process.title);

const { TERM_PROGRAM, HOMEPATH, OS } = process.env;

console.table({ TERM_PROGRAM, HOMEPATH, OS })