import { createServer } from 'http'
import { envs } from './config/envs'
import { AppRoutes } from './presentation/routes'
import { Server } from './presentation/server'
import { WSSService } from './presentation/services/wss.service'

(async () => {
  main()
})()

function main() {
  const { PORT } = envs

  //* Main server, just run create the instance of server
  const server = new Server({
    port: PORT
  })

  // server.start()

  //* Websocket server
  const httpServer = createServer(server.app)
  WSSService.initWSServer({ server: httpServer })

  //* Add then the routes while the websocket instance start for can access to the instance from routes
  server.addRoutes(AppRoutes.routes())

  httpServer.listen(envs.PORT, () => {
    console.log(`W says: Port running on port ${envs.PORT}`)
  })
}
