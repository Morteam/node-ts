import { envs } from './config/plugins/envs.plugin';
import { Server } from './presentation/server'
import { AppRoutes } from './presentation/routes'

(async () => {
    main()
})()

async function main() {
    const { PORT, PUBLIC_PATH } = envs;

    const serverConfig = {
        port: PORT,
        publicPath: PUBLIC_PATH,
        routes: AppRoutes.routes
    };

    const server = new Server(serverConfig);

    await server.start()
}
