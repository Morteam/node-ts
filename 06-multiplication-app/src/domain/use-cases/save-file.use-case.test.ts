import fs from 'fs'
import {describe, expect, test} from '@jest/globals';
import {SaveFile} from '@/domain/use-cases/save-file.use-case' // Review TS Config

describe('SaveFileUseCase', () => {

    const DEFAULT_OPTIONS = {
        filePath: 'outputs/table.md'
    }
    const MOCKED_OPTIONS = {
        fileContent: 'Hi from the moon 🌙'
    }

    const CUSTOM_OPTIONS = {
        fileContent: 'Custom message says: You are welcome',
        destination: 'custom-outputs',
        fileName: 'custom-table',
        extension: 'txt'
    }

    const CUSTOM_PATH = `${CUSTOM_OPTIONS.destination}/${CUSTOM_OPTIONS.fileName}.${CUSTOM_OPTIONS.extension}`

    // beforeAll()
    // beforeEach()
    // afterEach()
    // afterAll()

    beforeEach(() => {
        jest.clearAllMocks() // Clean the traditional jest.fn()
    })

    afterEach(() => {
        // Remove file created in the test
        if(fs.existsSync(DEFAULT_OPTIONS.filePath)) {
            fs.rmSync(DEFAULT_OPTIONS.filePath)
        }

        if(fs.existsSync(CUSTOM_PATH)) {
            fs.rmSync(CUSTOM_PATH)
        }

        // Remove complete folder
        // fs.rmSync('outputs', {recursive: true})
    })

    test('Should call SaveFile with default values', () => {
        const saveFile = new SaveFile()
        const resultSaveFile = saveFile.execute(MOCKED_OPTIONS)

        // After creation
        const fileExists = fs.existsSync(DEFAULT_OPTIONS.filePath)
        const fileContent = fs.readFileSync(DEFAULT_OPTIONS.filePath, { encoding: 'utf-8' })

        expect(resultSaveFile).toBeTruthy()
        expect(fileExists).toBeTruthy()
        expect(fileContent).toBe(MOCKED_OPTIONS.fileContent)
    })
    
    test('Should call SaveFile with custom values', () => {
        const saveFile = new SaveFile()
        const resultSaveFile = saveFile.execute(CUSTOM_OPTIONS)

        const fileExists = fs.existsSync(CUSTOM_PATH)
        const fileContent = fs.readFileSync(CUSTOM_PATH, {encoding: 'utf-8'})


        expect(resultSaveFile).toBeTruthy()
        expect(fileExists).toBeTruthy()
        expect(fileContent).toBe(CUSTOM_OPTIONS.fileContent)
    })

    test('Should return false if the directory could not be created', () => {
        const saveFile = new SaveFile()
        const mkDirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation( // mockImplementation owverwrites the method
            () => { throw new Error('This is a custom message from testing') }
        ) // 'fs' is the path or lib and 'mkdirSync' is the method to spy
        const resultSaveFile = saveFile.execute(CUSTOM_OPTIONS)

        expect(resultSaveFile).toBeFalsy()
        expect(mkDirSpy).toHaveBeenCalledTimes(1)

        // mkDirSpy.mockReset() // Clean the executions of or spy but the implementation continue
        mkDirSpy.mockRestore() // Delete our spy implementation
    })

    test('Should return false if the file could not be created', () => {
        const saveFile = new SaveFile()
        const writeFileSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation( // mockImplementation owverwrites the method
            () => { throw new Error('This is a custom message from testing -writing-') }
        ) // 'fs' is the path or lib and 'writeFileSync' is the method to spy
        const resultSaveFile = saveFile.execute(CUSTOM_OPTIONS)

        expect(resultSaveFile).toBeFalsy()
        expect(writeFileSpy).toHaveBeenCalledTimes(1)

        writeFileSpy.mockRestore() // Delete our spy implementation
    })
})
