import { CronService } from './cron/cron-service';
import { CheckService } from '../domain/use-cases/checks/check-service.use-case'

export class Server {
    static run() {

        CronService.createJob('*/3 * * * * *', async () => {
            console.log(`3 Seconds: google is ${await new CheckService().execute('http://www.google.com') ? 'OK' : 'down'}`)
        });

    }
}
