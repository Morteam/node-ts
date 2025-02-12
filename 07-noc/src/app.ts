import { Server } from './presentation/server'

const main = async () => {
    Server.run()
}

(async () => {
    await main()
})()