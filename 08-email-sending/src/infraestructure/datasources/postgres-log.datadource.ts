import { PrismaClient, SeverityLevel } from '@prisma/client';
import { LogDatasource } from '../../domain/datasources/log.datasource';
import { LogEntity, LogSeverity } from '../../domain/entities/log.entity';

export class PostgresLogDatasource implements LogDatasource {
    prismaClient
    prismaLogModel

    constructor(){
        this.prismaClient = new PrismaClient()
        this.prismaLogModel = this.prismaClient.logModel
    }

    async saveLog(log: LogEntity): Promise<void> {
        const newLog = await this.prismaLogModel.create({
            data: {
                ...log,
                level: log.level.toUpperCase() as SeverityLevel, // Type of level of our implementation with Prisma
            }
        })

        console.log(newLog);
    }
    async getLogs(severityLevel: LogSeverity): Promise<LogEntity[]> {
        const prismaLogs = await this.prismaLogModel.findMany({
            where: {
                level: severityLevel.toUpperCase() as SeverityLevel // Type of level of our implementation with Prisma
            }
        })

        // Mapper implementation
        const logs = prismaLogs.map(prismaLog => LogEntity.fromObject({
            ...prismaLog,
            level: prismaLog.level.toLowerCase() as LogSeverity, // Type of level of our implementation with Node
        })) // Similar to mongoLogs.map(mongoLog => LogEntity.fromObject(mongoLog))

        return logs;
    }

}