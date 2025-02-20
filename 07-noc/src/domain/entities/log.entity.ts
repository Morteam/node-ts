export enum LogSeverity {
    low = 'low',
    medium = 'medium',
    high = 'high',
}

export class LogEntity {
    public level: LogSeverity;
    public message: string;
    public createdAd: Date;

    constructor(message: string, level: LogSeverity) {
        this.level = level
        this.message = message
        this.createdAd = new Date()
    }

    static fromJSON(json: string): LogEntity {
        const { message, level, createdAd } = JSON.parse(json)

        if(!message) throw new Error('Message is required')
        if(typeof message !== 'string') throw new Error('Message invalid')
        if(!level) throw new Error('Level is required')
        if(!Object.values(LogSeverity).includes(level as LogSeverity)) throw new Error('Level invalid')
        if(!createdAd) throw new Error('Date is required')

        const log = new LogEntity(message, level)
        log.createdAd = new Date(createdAd)

        return log;
    }
}