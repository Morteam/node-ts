import { LogEntity, LogSeverity } from '../entities/log.entity';
import { LogRepository } from './log.repository'


const newMockLog = new LogEntity({
    message: 'Log Mock',
    level: LogSeverity.high,
    origin: 'log.datasource.test.ts'
})

class MockLogRepository implements LogRepository {
    async saveLog(log: LogEntity): Promise<void> {
        return;
    }
    async getLogs(severityLevel: LogSeverity): Promise<LogEntity[]> {
        return [newMockLog];
    }

}

describe('LogRepository', () => {
    test('Should test the LogRepository class', async () => {
        const mockLogRepository = new MockLogRepository();
        const saveLogSpy = jest.spyOn(mockLogRepository, 'saveLog') // Spy saveLog

        await mockLogRepository.saveLog(newMockLog)
        const mockLogs = await mockLogRepository.getLogs(LogSeverity.high)

        // Instance of
        expect(mockLogRepository).toBeInstanceOf(MockLogRepository)
        // Methods
        expect(typeof mockLogRepository.getLogs).toBe('function')
        expect(typeof mockLogRepository.saveLog).toBe('function')
        // Methods execution
        expect(saveLogSpy).toHaveBeenCalledTimes(1)
        expect(mockLogs).toHaveLength(1)
        expect(mockLogs[0]).toBeInstanceOf(LogEntity)
        expect(mockLogs[0].message).toBe(newMockLog.message)
    })
})
