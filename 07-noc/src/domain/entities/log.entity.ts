export enum LogSeverity {
    low = 'low',
    medium = 'medium',
    high = 'high',
}

export class LogEntity {
    public level: LogSeverity;
    public message: string;
    public createdAd: Date;

    constructor(message: string, level: LogSeverity, createdAd: Date) {
        this.level = level
        this.message = message
        this.createdAd = createdAd
    }
}