import { Server } from './presentation/server'

import { envs } from './config/plugins/envs.plugin';
import { LogModel, MongoDatabase } from './data/mongo';


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

    //* TEMPORAL!
    //* Create document (instance)
    const newLog = await LogModel.create({
        message: 'Log Message from Mongo',
        origin: 'app.ts'
    })

    //* Save it in the DB
    await newLog.save();



})()
