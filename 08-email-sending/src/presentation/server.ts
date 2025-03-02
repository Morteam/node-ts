import { CronService } from './cron/cron-service';
import { CheckService, SuccessCallback, ErrorCallback } from '../domain/use-cases/checks/check-service.use-case'
import { SendEmailLogs } from '../domain/use-cases/email/send-email-logs.use-case';
import { FileSystemDatasource } from '../infraestructure/datasources/file-system.datasource';
import { LogRepositoryImpl } from '../infraestructure/repositories/log.repository';
import { EmailService } from './email/email-service';

const fileSystemLogRepository = new LogRepositoryImpl( // It is a "general way" of using a functionality, for example, hosting a log through a repository, either from file systems or from a database.
    new FileSystemDatasource()
);

const emailService = new EmailService();

export class Server {
    static async run() {

        // const URL_TO_CHECK = 'http://www.google.com'
        const URL_TO_CHECK = 'http://localhost:3000/posts' // Pseudo server run with JSON Server

        const successCheckService: SuccessCallback = () => console.log('WWWEEEEELLLLLL 😌')
        const errorCheckService: ErrorCallback = (error: string) => console.log(error)

        // CronService.createJob('*/3 * * * * *', async () => {
        //     console.log(`3 Seconds: google is ${await new CheckService(fileSystemLogRepository, successCheckService, errorCheckService).execute(URL_TO_CHECK) ? 'OK' : 'down'}`)
        // });

        // SEND EMAIL
        new SendEmailLogs(
            emailService,
            fileSystemLogRepository
        ).execute('manuel.castro22@outlook.com')
    }
}
