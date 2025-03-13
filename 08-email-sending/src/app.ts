import { Server } from './presentation/server'

import { envs } from './config/plugins/envs.plugin';
import { MongoDatabase } from './data/mongo';


const main = async () => {
   await Server.run()
}

(async () => {
    // await main()

    console.log('SFSD44')
    
    await MongoDatabase.connect({
        mongoURL: envs.MONGO_URL,
        dbName: envs.MONGO_DB_NAME
    })
})()