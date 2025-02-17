import { CronService } from './cron/cron-service';
import { CheckService } from '../domain/use-cases/checks/check-service.use-case'

export class Server {
    static run() {

        // const URL_TO_CHECK = 'http://www.google.com'
        const URL_TO_CHECK = 'http://localhost:3000/posts' // Pseudo server run with JSON Server

        CronService.createJob('*/3 * * * * *', async () => {
            console.log(`3 Seconds: google is ${await new CheckService().execute(URL_TO_CHECK) ? 'OK' : 'down'}`)
        });

    }
}
