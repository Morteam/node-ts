import { LogEntity } from '../../entities/log.entity'
import { CheckServiceMultiple } from './check-service-multiple.use-case';


const mockLogRepository = {
    saveLog: jest.fn(),
    getLogs: jest.fn(),
}

const mockLogRepository2 = {
    saveLog: jest.fn(),
    getLogs: jest.fn(),
}

const successCallbackMock = jest.fn()
const errorCallbackMock = jest.fn()

const mockCheckService = new CheckServiceMultiple([mockLogRepository, mockLogRepository2], successCallbackMock, errorCallbackMock)

describe('check-service-multiple.use-case', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('Should call successCallback when fetch returns true ', async () => {
        const wasOk = await mockCheckService.execute('https://www.google.com')

        expect(successCallbackMock).toHaveBeenCalledTimes(1)
        expect(errorCallbackMock).not.toHaveBeenCalled()
        expect(mockLogRepository.saveLog).toHaveBeenCalledTimes(1)
        expect(mockLogRepository.saveLog).toHaveBeenCalledWith(expect.any(LogEntity)) // Be called with an instance of LogEntity
        expect(mockLogRepository2.saveLog).toHaveBeenCalledTimes(1)
        expect(mockLogRepository2.saveLog).toHaveBeenCalledWith(expect.any(LogEntity)) // Be called with an instance of LogEntity
        expect(wasOk).toBe(true)
    })

    test('Should call errorCallbackMock when fetch returns false ', async () => {
        const wasOk = await mockCheckService.execute('https://www.dsdsddddsd4google.com')

        expect(mockLogRepository.saveLog).toHaveBeenCalledTimes(1)
        expect(mockLogRepository2.saveLog).toHaveBeenCalledTimes(1)
        expect(errorCallbackMock).toHaveBeenCalledTimes(1)
        expect(successCallbackMock).not.toHaveBeenCalled()
        expect(wasOk).toBe(false)
    })

    test('Should call errorCallbackMock when fetch fails', async () => {
        global.fetch = jest.fn().mockResolvedValue({
            ok: false
        });

        const wasOk = await mockCheckService.execute('https://www.google.com')

        expect(mockLogRepository.saveLog).toHaveBeenCalledTimes(1)
        expect(mockLogRepository2.saveLog).toHaveBeenCalledTimes(1)
        expect(errorCallbackMock).toHaveBeenCalledTimes(1)
        expect(successCallbackMock).not.toHaveBeenCalled()
        expect(wasOk).toBe(false)
    })
})
