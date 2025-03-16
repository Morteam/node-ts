import { CronService } from './cron/cron-service';
import { CheckService, SuccessCallback, ErrorCallback } from '../domain/use-cases/checks/check-service.use-case'
import { SendEmailLogs } from '../domain/use-cases/email/send-email-logs.use-case';
import { FileSystemDatasource, MongoLogDataSource } from '../infraestructure/datasources';
import { LogRepositoryImpl } from '../infraestructure/repositories/log.repository';
import { EmailService } from './email/email-service';
//* Temporal
import { LogEntity, LogSeverity } from '../domain/entities/log.entity';

const logRepository = new LogRepositoryImpl( // It is a "general way" of using a functionality, for example, hosting a log through a repository, either from file systems or from a database.
    new FileSystemDatasource(),
    // new MongoLogDataSource(),
);

const emailService = new EmailService();

export class Server {
    static async run() {

        const URL_TO_CHECK = 'http://www.google.com'
        // const URL_TO_CHECK = 'http://localhost:3000/posts' // Pseudo server run with JSON Server

        const successCheckService: SuccessCallback = () => console.log('WWWEEEEELLLLLL 😌')
        const errorCheckService: ErrorCallback = (error: string) => console.log(error)

        // CronService.createJob('*/3 * * * * *', async () => {
        //     console.log(`3 Seconds: google is ${await new CheckService(logRepository, successCheckService, errorCheckService).execute(URL_TO_CHECK) ? 'OK' : 'down'}`)
        // });

        //* Email
        // SEND EMAIL
        // new SendEmailLogs(
        //     emailService,
        //     logRepository
        // ).execute('manuel.castro22@outlook.com')

        //* Mongo
        //* use useCase (???)
        //* Get logs
        const logsFiltered = await logRepository.getLogs(LogSeverity.medium);
        console.log('logsFiltered', logsFiltered)

        //* Create Log
        // const logSample = {
        //     level: 'high',
        //     origin: 'server.ts',
        //     message: 'Sample Message V-A1'
        // } as LogEntity; // This should be an instance of LogEntity

        // await mongoLogRepository.saveLog(logSample)
    }
}
