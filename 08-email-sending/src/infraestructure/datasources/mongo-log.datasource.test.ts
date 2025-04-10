import mongoose from 'mongoose';
import { envs } from '../../config/plugins/envs.plugin';
import { LogModel, MongoDatabase } from '../../data/mongo-db';
import { LogSeverity } from '../../domain/entities/log.entity';
import { MongoLogDataSource } from './mongo-log.datasource';

const LOG_ENTITY_MOCKED = {
    level: LogSeverity.high,
    message: 'Sample',
    origin: 'mongo-log.datasource.test.ts',
    createdAt: new Date()
}

const LOG_ENTITY_MOCKED_2 = {
    level: LogSeverity.high,
    message: 'Sample v2',
    origin: 'mongo-log.datasource.test.ts',
    createdAt: new Date()
}

const { MONGO_DB_NAME, MONGO_URL } = envs;

const OPTIONS_MOCKED = {
    mongoURL: MONGO_URL,
    dbName: MONGO_DB_NAME,
}

describe('Mongo Log Data source', () => {
    const mongoLogDSMock = new MongoLogDataSource()

    beforeAll(async () => {
        await MongoDatabase.connect(OPTIONS_MOCKED)
    })

    beforeEach(() => {
        jest.clearAllMocks()
    })

    afterAll(async () => {
        await LogModel.deleteMany() // Delete all logs in the DB

        mongoose.connection.close() // Finish the mongoose connection
    })

    test('Should save the Log', async () => {
        const consoleSpy = jest.spyOn(console, 'log')

        await mongoLogDSMock.saveLog(LOG_ENTITY_MOCKED)

        expect(consoleSpy).toHaveBeenCalled()
        expect(consoleSpy).toHaveBeenCalledWith('Log created ', expect.any(String))
    })
    
    test('Should get all logs', async () => {
        await mongoLogDSMock.saveLog(LOG_ENTITY_MOCKED_2)

        const logs = await mongoLogDSMock.getLogs(LogSeverity.high)

        console.log(logs)

        expect(logs.length).toBe(2)
        expect(logs).toEqual([{
            level: 'high',
            message: 'Sample',
            createdAt: expect.any(Date),
            origin: 'mongo-log.datasource.test.ts'
        },
        {
            level: 'high',
            message: 'Sample v2',
            createdAt: expect.any(Date),
            origin: 'mongo-log.datasource.test.ts'
        }])
    })
});