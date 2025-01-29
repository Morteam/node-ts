import { yarg } from '@/plugins/yargs.plugin';
import { ServerApp } from './presentation/server-app';

// IIFE, Self-executing anonymous function + asynchronous
(async () => {
    await main()
})();

async function main() {
    const {b:base, l:limit, s:showTable} = yarg

    ServerApp.run({base, limit, showTable})
}  
