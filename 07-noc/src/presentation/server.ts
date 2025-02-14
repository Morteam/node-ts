import { CronService } from './cron/cron-service';

export class Server {
    static run() {

        CronService.createJob('*/4 * * * * *', () => {
            console.log('4 Seconds Nigga', new Date())
        });

    }
}
