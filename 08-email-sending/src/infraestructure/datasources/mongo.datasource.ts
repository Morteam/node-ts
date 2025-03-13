import { envs } from '../../config/plugins/envs.plugin';
import { LogModel, MongoDatabase } from '../../data/mongo';
import { LogDatasource } from '../../domain/datasources/log.datasource';
import { LogEntity, LogSeverity } from '../../domain/entities/log.entity';

export class MongoDataSource implements LogDatasource {
    constructor() {
        this.connect()
    }

    private async connect() {
        try {
            // ! Await?
            MongoDatabase.connect({
                mongoURL: envs.MONGO_URL,
                dbName: envs.MONGO_DB_NAME,
            })

            console.log('Mongo connected')
        } catch(error) {
            console.error('Mongo can not connect')
        }
    }

    async saveLog(log: LogEntity): Promise<void> {
        //? Try catch
        const newLog = await LogModel.create(log)

        await newLog.save()
    }

    async getLogs(severityLevel: LogSeverity): Promise<LogEntity[]> {
        //? Try catch
        const mongoLogs = await LogModel.find({level: severityLevel}) as LogEntity[];

        return mongoLogs;
    }
}
