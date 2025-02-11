import {describe, expect, jest, test} from '@jest/globals';
import {ServerApp} from '@/presentation/server-app'
import { CreateTable, CreateTableOptions } from '@/domain/use-cases/create-table.use-case';
import { SaveFile, SaveFileOptions } from '@/domain/use-cases/save-file.use-case';

describe('ServerApp', () => { // fs.rmSync('outputs', {recursive: true})
    const OPTIONS = {
        base: 16,
        limit: 11,
        destination: 'dest-s-test',
        extension: 'txt',
        filename: 'name-s-test',
        showTable: true,
    }

    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('Should create a ServerApp instance', () => {
        const serverInstance = new ServerApp()

        expect(serverInstance).toBeInstanceOf(ServerApp)
        expect(typeof ServerApp).toBe('function')
    })

    // Integration Test
    // test('Should run ServerApp with options', () => {
    //     const logsSpy = jest.spyOn(console, 'log');
    //     const createTableSpy = jest.spyOn(CreateTable.prototype, 'execute')
    //     const saveFileSpy = jest.spyOn(SaveFile.prototype, 'execute')

    //     const { base, limit, extension, destination, filename } = OPTIONS

    //     ServerApp.run(OPTIONS)

    //     expect(logsSpy).toHaveBeenCalledTimes(3)
    //     expect(logsSpy).toHaveBeenCalledWith('Running 🏃‍♂️‍➡️🏃‍♂️‍➡️')
    //     expect(logsSpy).toHaveBeenLastCalledWith('File created!')

    //     expect(createTableSpy).toHaveBeenCalledTimes(1)
    //     expect(createTableSpy).toHaveBeenCalledWith({base, limit})

    //     expect(saveFileSpy).toHaveBeenCalledTimes(1)
    //     expect(saveFileSpy).toHaveBeenCalledWith({fileContent: expect.any(String), extension, destination, fileName: filename})
    // })

    test('Should run ServerApp with custom values mocked', () => {
        const MOCK_RESPONSE_CREATE_TABLE = '1 x 2 = 2'
        const MOCK_RESPONSE_SAVE_FILE = true

        const consoleLogMock = jest.fn()
        const consoleErrorMock = jest.fn()
        const createTableMock =
            jest.fn().mockReturnValue(MOCK_RESPONSE_CREATE_TABLE) as ({base, limit}: CreateTableOptions) => string
        const saveFileMock =
            jest.fn().mockReturnValue(MOCK_RESPONSE_SAVE_FILE) as ({fileContent, destination, fileName}:SaveFileOptions)=>boolean;

        const { base, limit, extension, destination, filename } = OPTIONS

        console.log = consoleLogMock
        console.error = consoleErrorMock
        CreateTable.prototype.execute = createTableMock
        SaveFile.prototype.execute = saveFileMock

        ServerApp.run(OPTIONS)

        expect(consoleLogMock).toHaveBeenCalledWith('Running 🏃‍♂️‍➡️🏃‍♂️‍➡️')
        expect(createTableMock).toHaveBeenCalledWith({base, limit})
        expect(saveFileMock).toHaveBeenCalledWith({destination, extension, fileContent: MOCK_RESPONSE_CREATE_TABLE, fileName: filename})
        expect(consoleLogMock).toHaveBeenCalledWith('File created!')
        expect(consoleErrorMock).not.toHaveBeenCalled()
    })
})
