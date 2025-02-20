import { Server } from './presentation/server'

const main = async () => {
   await Server.run()
}

(async () => {
    await main()
})()