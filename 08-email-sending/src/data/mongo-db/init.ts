import mongoose from 'mongoose'

interface MongoConnectOptions {
    mongoURL: string;
    dbName: string;
}

export class MongoDatabase {
    static async connect({mongoURL, dbName}: MongoConnectOptions) { 
        try {
            await mongoose.connect(mongoURL, {
                dbName
            })

            return true;
        } catch(e: unknown|any) {
            throw new Error(e.message);
        }
    }
}