import { EmailService } from "../../../presentation/email/email-service"
import { LogEntity, LogSeverity } from "../../entities/log.entity";
import { SendEmailLogs } from "./send-email-logs.use-case"

const mockNewLog = {
    level: LogSeverity.low,
    message: 'The email was sent',
    origin: 'send-email-logs.use-case.ts'
}

const mockErrorNewLog = {
    level: LogSeverity.high,
    message: 'Error: Email logs was not sent',
    origin: 'send-email-logs.use-case.ts'
}

const mockLogRepository = {
    saveLog: jest.fn(),
    getLogs: jest.fn(),
}

const mockEmailService = {
    sendEmailWithFSLogs: jest.fn().mockReturnValue(true),
    sendEmail: jest.fn(),
} as any;

const sendEmailLogsMocked = new SendEmailLogs(mockEmailService, mockLogRepository)

describe('Send email logs use case', () => {
    test('Should sendEmail and saveLogs', async () => {
        const result = await sendEmailLogsMocked.execute('sample@outlook.com')

        expect(result).toBe(true)
        expect(mockEmailService.sendEmailWithFSLogs).toHaveBeenCalled()
        expect(mockLogRepository.saveLog).toHaveBeenCalledWith(expect.objectContaining(mockNewLog)) // Option 1
        expect(mockLogRepository.saveLog).toHaveBeenCalledWith(expect.any(LogEntity)) // Option 2
    });

    test('Should save a log of error ', async () => {
        mockEmailService.sendEmailWithFSLogs.mockResolvedValue(false);

        const result = await sendEmailLogsMocked.execute('sample@outlook.com')

        expect(result).toBe(false)
        expect(mockLogRepository.saveLog).toHaveBeenCalledWith(expect.objectContaining(mockErrorNewLog)) // Option 1
        expect(mockLogRepository.saveLog).toHaveBeenCalledWith(expect.any(LogEntity)) // Option 2
    });
})