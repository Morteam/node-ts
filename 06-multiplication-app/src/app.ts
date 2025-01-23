import { yarg } from '@/plugins/yargs.plugin'

const { lotso, j, samp } = yarg;

console.log('SAMPLE 2');
console.log(yarg);
console.log(lotso);
console.log(j);
console.log(samp);


// IIFE, Self-executing anonymous function + asynchronous
(async () => {
    function sample(phrase:string) {
        console.log(`Sample executed: ${phrase}`)
    }    

    await sample('Welcome to the Jungle, inside')
})();
