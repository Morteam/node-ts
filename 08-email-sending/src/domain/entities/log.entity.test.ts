import { LogEntity, LogSeverity } from './log.entity'

describe('LogEntity', () => {
    test('Should create a LogEntity instance', () => {
        const mockLogEntityData = {
            message: 'Log Mock',
            level: LogSeverity.high,
            origin: 'log.entity.test.ts'
        }

        const newMockLog = new LogEntity(mockLogEntityData)

        expect(newMockLog).toBeInstanceOf(LogEntity)
        expect(newMockLog.message).toBe(mockLogEntityData.message)
        expect(newMockLog.level).toBe(mockLogEntityData.level)
        expect(newMockLog.origin).toBe(mockLogEntityData.origin)
        expect(newMockLog.createdAt).toBeInstanceOf(Date)
    })

    test('Should create a LogEntity instance fromJSON', () => {
        const mockJson = `{"level":"low","message":"Service http://www.google.com working","createdAt":"2025-03-16T02:11:15.269Z","origin":"check-service.use-case.ts"}`
        const mockParsed = JSON.parse(mockJson)
        const newMockLog = LogEntity.fromJSON(mockJson)

        expect(newMockLog).toBeInstanceOf(LogEntity)
        expect(newMockLog.message).toBe(mockParsed.message)
        expect(newMockLog.level).toBe(mockParsed.level)
        expect(newMockLog.origin).toBe(mockParsed.origin)
        expect(newMockLog.createdAt).toBeInstanceOf(Date)
    })

    test('Should create a LogEntity instance fromObject', () => {
        const mockLogEntityData = {
            message: 'Log Mock',
            level: LogSeverity.high,
            origin: 'log.entity.test.ts',
            createdAt: new Date()
        }

        const newMockLog = LogEntity.fromObject(mockLogEntityData)

        expect(newMockLog.message).toBe(newMockLog.message)
        expect(newMockLog.level).toBe(newMockLog.level)
        expect(newMockLog.origin).toBe(newMockLog.origin)
        expect(newMockLog.createdAt).toBeInstanceOf(Date)
    })
})
