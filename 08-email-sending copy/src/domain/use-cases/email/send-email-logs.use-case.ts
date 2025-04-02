import { EmailService } from '../../../presentation/email/email-service';
import { LogEntity, LogSeverity } from '../../entities/log.entity';
import { LogRepository } from '../../repository/log.repository';

interface SendEmailLogsUseCase {
    execute(to: string | string[]): Promise<boolean>
}

export class SendEmailLogs implements SendEmailLogsUseCase {
    constructor(
        private readonly emailService: EmailService, // TODO: Refactor this should be a repository too, because this is called from presentation
        private readonly logRepository: LogRepository
    ) {}

    async execute(to: string | string[]) {
        try {
            const emailWasSent = await this.emailService.sendEmailWithFSLogs(to); // ?: This should jus send the email with FS Logs? ummmm

            if(!emailWasSent) {
                throw new Error('Email logs was not sent')
            }

            const log = new LogEntity({
                level: LogSeverity.low,
                message: 'The email was sent',
                origin: 'send-email-logs.use-case.ts'
            })

            this.logRepository.saveLog(log)

            return true;
        } catch(error) {
            const log = new LogEntity({
                level: LogSeverity.high,
                message: `${error}`,
                origin: 'send-email-logs.use-case.ts'
            })

            this.logRepository.saveLog(log)

            return false;
        }
    }
}
