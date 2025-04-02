import mongoose from 'mongoose';
import { envs } from '../../../config/plugins/envs.plugin';
import { MongoDatabase } from '../init';
import { LogModel } from './log.model';

const { MONGO_DB_NAME, MONGO_URL } = envs;

describe('Log Model tests', () => {
    beforeAll(async () => { // Always before all tests it's necessary connect to Mongo DB
        await MongoDatabase.connect({
            mongoURL: MONGO_URL,
            dbName: MONGO_DB_NAME,
        })
    });

    afterAll(() => {
        mongoose.connection.close() // Allways after all tests it's necessary close the connection to Mongo DB
    });

    test('Should return logModel', async () => { // Here validate that the log will be saved into database
        const MOCK_LOG_DATA = {
            level: 'medium',
            message: 'Test message from jest v2',
            origin: 'log.model.test.ts'
        }

        const newLog = await LogModel.create(MOCK_LOG_DATA)

        expect(newLog).toEqual(expect.objectContaining({
            ...MOCK_LOG_DATA,
            createdAt: expect.any(Date),
            id: expect.any(String)
        }))

        await LogModel.findByIdAndDelete(newLog.id) // After this test will delete the log document (registry)
    })
  
    test('Should return the schema object', () => {
        const logSchema = LogModel.schema.obj; // Get the Schema object (get with console.log of LogModel.schema.obj)

        expect(logSchema).toEqual(expect.objectContaining(    {
            message: { type: expect.any(Function), isRequired: true },
            origin: { type: expect.any(Function)},
            level: {
              type: expect.any(Function),
              enum: [ 'low', 'medium', 'high' ],
              default: 'low'
            },
            createdAt: { type: expect.any(Function), default: expect.any(Date) }
          }))
    })

    test('', () => {})
})
