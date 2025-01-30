import { yarg } from '@/plugins/yargs.plugin';
import { ServerApp } from './presentation/server-app';

// IIFE, Self-executing anonymous function + asynchronous
(async () => {
    await main()
})();

async function main() {
    const {
        b:base,
        d:destination,
        e:extension,
        l:limit,
        n:filename,
        s:showTable
    } = yarg

    ServerApp.run({base, destination, extension, filename, limit, showTable}) // Or simply pass Yargs
}  
