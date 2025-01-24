import { yarg } from '@/plugins/yargs.plugin';
import { createTemplateMultiplication, printData } from '@/app.mnl';

// IIFE, Self-executing anonymous function + asynchronous
(async () => {
    await main()
})();

async function main() {
    const { b:base, l:limit, s:showTable } = yarg;

    const result = createTemplateMultiplication(base, limit)
    printData({
        filename: `Table ${base}`,
        path: './outputs/',
        data: result
    })
    showTable && console.log('result ', result)
}  
