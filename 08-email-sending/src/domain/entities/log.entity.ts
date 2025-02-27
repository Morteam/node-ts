export enum LogSeverity {
    low = 'low',
    medium = 'medium',
    high = 'high',
}

export interface LogEntityProps {
    level: LogSeverity;
    message: string;
    createdAd?: Date;
    origin: string;
}

export class LogEntity {
    public level: LogSeverity;
    public message: string;
    public createdAd: Date;
    public origin: string;

    constructor(props: LogEntityProps) {
        const {level, message, createdAd = new Date(), origin} = props;

        this.level = level
        this.message = message
        this.createdAd = createdAd
        this.origin = origin;
    }

    static fromJSON(json: string): LogEntity {
        const { message, level, createdAd, origin } = JSON.parse(json)

        if(!message) throw new Error('Message is required')
        if(typeof message !== 'string') throw new Error('Message invalid')
        if(!level) throw new Error('Level is required')
        if(!Object.values(LogSeverity).includes(level as LogSeverity)) throw new Error('Level invalid')
        if(!createdAd) throw new Error('Date is required')

        const log = new LogEntity({message, level, createdAd, origin})
        log.createdAd = new Date(createdAd)

        return log;
    }
}