import { LogDatasource } from '../../domain/datasources/log.datasource';
import { LogEntity, LogSeverity } from '../../domain/entities/log.entity';
import { LogRepositoryImpl } from './log.repository';

const dataSourceMocked: LogDatasource = {
    saveLog: jest.fn(),
    getLogs: jest.fn(),
};

const logMocked = {
    level: LogSeverity.low,
    message: 'Message says Log mocked',
    origin: 'fs.datasource.test.ts'
} as LogEntity;

describe('LogRepositoryImpl', () => {

    beforeEach(() => {
        jest.clearAllMocks()   
    })

    test('Should call the saveLog of the datasource', () => {
        const logRepositoryImplementation = new LogRepositoryImpl(dataSourceMocked);
        
        logRepositoryImplementation.saveLog(logMocked)

        expect(logRepositoryImplementation).toBeInstanceOf(LogRepositoryImpl)
        expect(dataSourceMocked.saveLog).toHaveBeenCalledTimes(1)
        expect(dataSourceMocked.saveLog).toHaveBeenCalledWith(logMocked)
    })

    test('Should call the getLogs of the datasource', () => {
        const logRepositoryImplementation = new LogRepositoryImpl(dataSourceMocked);
        
        logRepositoryImplementation.getLogs(LogSeverity.low)

        expect(dataSourceMocked.getLogs).toHaveBeenCalledTimes(1)
        expect(dataSourceMocked.getLogs).toHaveBeenCalledWith(LogSeverity.low)
    })

    // test('Should ', () => {})

})