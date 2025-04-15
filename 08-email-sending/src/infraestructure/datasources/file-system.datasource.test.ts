import fs from 'fs'
import path from 'path'
import { FileSystemDatasource } from './file-system.datasource'
import { LogEntity, LogSeverity } from '../../domain/entities/log.entity'

describe('File system datasource', () => {

    const logPath = path.join(__dirname, '../../../logs') // Concat the path

    beforeAll(() => {
        fs.rmSync(logPath, { recursive: true, force: true })
    });

    test('Should create an instance', () => {
        const fsMock = new FileSystemDatasource()

        expect(fsMock).toBeInstanceOf(FileSystemDatasource)
    })
    
    test('Should create a folders if they do not exist', () => {
        new FileSystemDatasource()

        const filesInLogsFolder = fs.readdirSync(logPath) // Read the content of the directory

        expect(filesInLogsFolder).toEqual([ 'logs-all.log', 'logs-high.log', 'logs-medium.log' ])
    })

    test('Should save a log in logs-all.log', async () => {
        const lowLogSample = new LogEntity({
            level: LogSeverity.low,
            message: 'All logs mocked',
            origin: 'fs.datasource.test.ts'
        })

        const fsMock = new FileSystemDatasource()
        await fsMock.saveLog(lowLogSample)

        const allFileData = fs.readFileSync(`${logPath}/logs-all.log`, 'utf-8')

        expect(allFileData).toContain( JSON.stringify(lowLogSample) )
    })

    test('Should save a log in logs-medium.log', async () => {
        const mediumLogSample = new LogEntity({
            level: LogSeverity.medium,
            message: 'Medium logs mocked',
            origin: 'fs.datasource.test.ts'
        })

        const fsMock = new FileSystemDatasource()
        await fsMock.saveLog(mediumLogSample)

        const allFileData = fs.readFileSync(`${logPath}/logs-medium.log`, 'utf-8')

        expect(allFileData).toContain( JSON.stringify(mediumLogSample) )
    })

    test('Should save a log in logs-high.log', async () => {
        const highLogSample = new LogEntity({
            level: LogSeverity.high,
            message: 'High logs mocked',
            origin: 'fs.datasource.test.ts'
        })

        const fsMock = new FileSystemDatasource()
        await fsMock.saveLog(highLogSample)

        const allFileData = fs.readFileSync(`${logPath}/logs-high.log`, 'utf-8')

        expect(allFileData).toContain( JSON.stringify(highLogSample) )
    })

    test('Should get logs according severity', async () => {
        const lowLogSample1 = new LogEntity({
            level: LogSeverity.low,
            message: 'All logs mocked: Samp A1',
            origin: 'fs.datasource.test.ts'
        })
        const lowLogSample2 = new LogEntity({
            level: LogSeverity.low,
            message: 'All logs mocked: Samp A2',
            origin: 'fs.datasource.test.ts'
        })
        const mediumLogSample1 = new LogEntity({
            level: LogSeverity.medium,
            message: 'Medium log mocked: Samp A1',
            origin: 'fs.datasource.test.ts'
        })
        const highLogSample1 = new LogEntity({
            level: LogSeverity.high,
            message: 'High log mocked: Samp A1',
            origin: 'fs.datasource.test.ts'
        })
        const highLogSample2 = new LogEntity({
            level: LogSeverity.high,
            message: 'High log mocked: Samp A2',
            origin: 'fs.datasource.test.ts'
        })

        const fsMock = new FileSystemDatasource()

        await fsMock.saveLog(lowLogSample1)
        await fsMock.saveLog(lowLogSample2)
        await fsMock.saveLog(mediumLogSample1)
        await fsMock.saveLog(highLogSample1)
        await fsMock.saveLog(highLogSample2)

        const allLogs = await fsMock.getLogs(LogSeverity.low)
        const allMediumLogs = await fsMock.getLogs(LogSeverity.medium)
        const allHighLogs = await fsMock.getLogs(LogSeverity.high)

        expect(allLogs).toEqual(expect.arrayContaining([lowLogSample1, lowLogSample2, mediumLogSample1, highLogSample1, highLogSample2]))
        expect(allMediumLogs).toEqual(expect.arrayContaining([mediumLogSample1]))
        expect(allHighLogs).toEqual(expect.arrayContaining([highLogSample1, highLogSample2]))
    })

    // test('Should ', () => {})
})
