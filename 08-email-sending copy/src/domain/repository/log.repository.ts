// Definition of interface or abstract class that works like template, It's the agreement communications between Domain and Datasources
import { LogEntity, LogSeverity } from '../entities/log.entity';

export abstract class LogRepository {
    abstract saveLog(log: LogEntity): Promise<void>
    abstract getLogs(severityLevel: LogSeverity): Promise<LogEntity[]>
}
