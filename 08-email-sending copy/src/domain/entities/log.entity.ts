export enum LogSeverity {
    low = 'low',
    medium = 'medium',
    high = 'high',
}

export interface LogEntityProps {
    level: LogSeverity;
    message: string;
    createdAt?: Date;
    origin: string;
}

export class LogEntity {
    public level: LogSeverity;
    public message: string;
    public createdAt: Date;
    public origin: string;

    constructor(props: LogEntityProps) {
        const {level, message, createdAt = new Date(), origin} = props;

        this.level = level
        this.message = message
        this.createdAt = createdAt
        this.origin = origin;
    }

    // Mapper
    static fromJSON(json: string): LogEntity {
        const { message, level, createdAt, origin } = JSON.parse(json)

        if(!message) throw new Error('Message is required')
        if(typeof message !== 'string') throw new Error('Message invalid')
        if(!level) throw new Error('Level is required')
        if(!Object.values(LogSeverity).includes(level as LogSeverity)) throw new Error('Level invalid')
        if(!createdAt) throw new Error('Date is required')

        const log = new LogEntity({message, level, createdAt, origin})
        log.createdAt = new Date(createdAt)

        return log;
    }

    // Mapper
    static fromObject(obj: {[key: string]: any}): LogEntity {
        const { message, level, createdAt, origin } = obj;

        if(!message) throw new Error('Message is required')
        if(typeof message !== 'string') throw new Error('Message invalid')
        if(!level) throw new Error('Level is required')
        if(!Object.values(LogSeverity).includes(level as LogSeverity)) throw new Error('Level invalid')
        if(!createdAt) throw new Error('Date is required')

        const log = new LogEntity({message, level, createdAt, origin})
        log.createdAt = new Date(createdAt)

        return log
    }
}