import { CronService } from './cron/cron-service';
import { CheckService, SuccessCallback, ErrorCallback } from '../domain/use-cases/checks/check-service.use-case'
import { FileSystemDatasource } from '../infraestructure/datasources/file-system.datasource';
import { LogRepositoryImpl } from '../infraestructure/repositories/log.repository';
import { EmailService } from './email/email-service';

const fileSystemLogRepository = new LogRepositoryImpl(
    new FileSystemDatasource()
);

export class Server {
    static async run() {

        // const URL_TO_CHECK = 'http://www.google.com'
        const URL_TO_CHECK = 'http://localhost:3000/posts' // Pseudo server run with JSON Server

        const successCheckService: SuccessCallback = () => console.log('WWWEEEEELLLLLL 😌')
        const errorCheckService: ErrorCallback = (error: string) => console.log(error)

        // CronService.createJob('*/3 * * * * *', async () => {
        //     console.log(`3 Seconds: google is ${await new CheckService(fileSystemLogRepository, successCheckService, errorCheckService).execute(URL_TO_CHECK) ? 'OK' : 'down'}`)
        // });

        const sendEmailService = new EmailService()
        sendEmailService.sendEmail({
            to: 'manuel.castro22@outlook.com',
            subject: 'Hi from the moon v1',
            htmlBody: `<h1>Hi Joshua</h1>`
        })

    }
}
