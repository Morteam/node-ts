// File created for work with TESTING and test the routes with SUPERTEST package
import { envs } from '../config/plugins/envs.plugin'
import { AppRoutes } from '../presentation/routes'
import { Server } from '../presentation/server'

export const testServer = new Server({
  port: envs.PORT,
  publicPath: envs.PUBLIC_PATH,
  routes: AppRoutes.routes,
})
