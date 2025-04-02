import { MongoDatabase } from './init'
import { envs } from '../../config/plugins/envs.plugin'
import mongoose from 'mongoose';

describe('init MongoDB', () => {
    const { MONGO_DB_NAME, MONGO_URL } = envs;

    afterAll(() => {
        mongoose.connection.close() // Finish the mongoose connection
    })
    
    test('Should connect with MongoDB', async () => {
        const OPTIONS_MOCKED = {
            mongoURL: MONGO_URL,
            dbName: MONGO_DB_NAME
        }

        const mongoConnection = await MongoDatabase.connect(OPTIONS_MOCKED)

        expect(mongoConnection).toBe(true)
    })

    test('Should throw an error if the MongoDB connection has fake access', async () => {
        const OPTIONS_MOCKED = {
            mongoURL: 'mongodb://sample:88888@localhost:27017/',
            dbName: 'CON-FK'
        }

        try {
            await MongoDatabase.connect(OPTIONS_MOCKED)
        } catch(error: unknown|any) {
            expect(error.message).toContain("Can't call `openUri()` on an active connection with different connection strings. Make sure you aren't calling `mongoose.connect()` multiple times. See: https://mongoosejs.com/docs/connections.html#multiple_connections")
        }

    })
})
