import { CronJob } from 'cron';

export type CronTime = string | Date;
export type OnTick = () => void;

export class CronService {
    static createJob(cronTime: CronTime, onTick: OnTick) {
        const job = new CronJob(cronTime, onTick);

        job.start()

        return job;
    }
}