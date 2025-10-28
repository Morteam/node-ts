import { envs } from './config/envs'
import { AppRoutes } from './presentation/routes'
import { Server } from './presentation/server'

(async () => {
  main()
})()

function main() {
  const { PORT } = envs

  const server = new Server({
    port: PORT,
    routes: AppRoutes.routes(),
  })

  server.start()
}
