import { Server } from './presentation/server'
import { envs } from './config/plugins/envs.plugin';

(async () => {
    main()
})()

async function main() {
    // const { PORT, PUBLIC_PATH } = envs;

    // const serverConfig = {
    //     port: PORT,
    //     publicPath: PUBLIC_PATH,
    // };

    // const server = new Server(serverConfig);

    // await server.start()
}
