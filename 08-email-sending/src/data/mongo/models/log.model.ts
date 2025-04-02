import mongoose from 'mongoose';

//* In MongoDB:
//* Collection is similar a Table and a Document is similar to Record ('Registro')  

//* Schema: Data definition
const logSchema = new mongoose.Schema({
    message: {
        type: String,
        isRequired: true
    },
    origin: {
        type: String,
    },
    level: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'low',
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

//* Model: Interact with DB
// By default the Collection (Table) will be created like the plural, for example: the model is called 'log' the table will be named like 'logs'
export const LogModel = mongoose.model('Log', logSchema)
