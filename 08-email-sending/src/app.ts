import { Server } from './presentation/server'
import { envs } from './config/plugins/envs.plugin'

const main = async () => {
   await Server.run()
}

(async () => {
    await main()
})()