import { LogEntity, LogSeverity } from '../entities/log.entity';
import { LogDatasource } from './log.datasource'


const newMockLog = new LogEntity({
    message: 'Log Mock',
    level: LogSeverity.high,
    origin: 'log.datasource.test.ts'
})

class MockLogDatasource implements LogDatasource {
    async saveLog(log: LogEntity): Promise<void> {
        return;
    }
    async getLogs(severityLevel: LogSeverity): Promise<LogEntity[]> {
        return [newMockLog];
    }

}

describe('LogDatasource', () => {
    test('Should test the LogDatasource class', async () => {
        const mockLogDatasource = new MockLogDatasource();
        const saveLogSpy = jest.spyOn(mockLogDatasource, 'saveLog') // Spy saveLog

        await mockLogDatasource.saveLog(newMockLog)
        const mockLogs = await mockLogDatasource.getLogs(LogSeverity.high)

        // Instance of
        expect(mockLogDatasource).toBeInstanceOf(MockLogDatasource)
        // Methods
        expect(typeof mockLogDatasource.getLogs).toBe('function')
        expect(typeof mockLogDatasource.saveLog).toBe('function')
        // Methods execution
        expect(saveLogSpy).toHaveBeenCalledTimes(1)
        expect(mockLogs).toHaveLength(1)
        expect(mockLogs[0]).toBeInstanceOf(LogEntity)
        expect(mockLogs[0].message).toBe(newMockLog.message)
    })
})
