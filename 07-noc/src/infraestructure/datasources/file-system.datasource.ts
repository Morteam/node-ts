// Implementation of one data source
import fs from 'fs';
import { LogDatasource } from '../../domain/datasources/log.datasource';
import { LogEntity, LogSeverity } from '../../domain/entities/log.entity';

export class FileSystemDatasource implements LogDatasource {
    // Create log folders
    private readonly logPath = 'logs/'
    private readonly allLogsPath = 'logs/logs-all.log'
    private readonly mediumLogsPath = 'logs/logs-medium.log'
    private readonly highLogsPath = 'logs/logs-high.log'

    constructor() {
        this.createLogsFiles()
    }


    private createLogsFiles() {
        if( !fs.existsSync(this.logPath) ) {
            fs.mkdirSync(this.logPath)
        }

        [this.allLogsPath, this.mediumLogsPath, this.highLogsPath].forEach(path => {
            if( fs.existsSync(path) ) return
            fs.writeFileSync(path, '')
        })
    }

    async saveLog(newLog: LogEntity): Promise<void> {
        const logAsJSON = `${JSON.stringify(newLog)} \n`

        // Add line at final fila
        fs.appendFileSync(this.allLogsPath, logAsJSON)

        if( newLog.level === LogSeverity.medium ) {
            fs.appendFileSync(this.mediumLogsPath, logAsJSON)
        }

        if( newLog.level === LogSeverity.high ) {
            fs.appendFileSync(this.highLogsPath, logAsJSON)
        }
    }
    getLogs(severityLevel: LogSeverity): Promise<LogEntity[]> {
        throw new Error('Method not implemented.');
    }
}
