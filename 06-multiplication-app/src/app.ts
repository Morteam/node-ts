import { yarg } from '@/plugins/yargs.plugin';

// IIFE, Self-executing anonymous function + asynchronous
(async () => {
    await main()
})();

async function main() {
    const { lotso, j, samp } = yarg;

    console.log('SAMPLE 2');
    console.log(yarg);
    console.log(lotso);
    console.log(j);
    console.log(samp);
}  
