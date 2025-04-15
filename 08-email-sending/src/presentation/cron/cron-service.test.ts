import { CronService } from './cron-service';

describe('Cron service', () => {
    test('Should create a job', (done) => {
        const ONE_SECOND = '* * * * * *'
        const mockTick = jest.fn();

        const job = CronService.createJob(ONE_SECOND, mockTick) // Each second

        setTimeout(() => { // After 2 seconds
            expect(mockTick).toHaveBeenCalledTimes(2)

            job.stop() // Stop the job

            done()
        }, 2000)
    })

    // test('', () => {})
})