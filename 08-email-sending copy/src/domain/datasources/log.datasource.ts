// Definition of interface or abstract class that works like template, It's the agreement for all Data Sources
import { LogEntity, LogSeverity } from '../entities/log.entity';

export abstract class LogDatasource {
    abstract saveLog(log: LogEntity): Promise<void>
    abstract getLogs(severityLevel: LogSeverity): Promise<LogEntity[]>
}
