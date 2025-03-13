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
    // const newLog = await LogModel.create({
    //     message: 'Log Message from Mongo v1',
    //     origin: 'app.ts',
    //     level: 'medium',
    // })

    //* Save it in the DB
    // await newLog.save();


    //* Get all data from the Collection
    const data = await LogModel.find();

    console.log(data)



})()
