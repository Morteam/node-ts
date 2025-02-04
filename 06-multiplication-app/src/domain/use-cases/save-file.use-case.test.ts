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

    // beforeAll()
    // beforeEach()
    // afterEach()
    // afterAll()

    afterEach(() => {
        // Remove file created in the test
        if(fs.existsSync(DEFAULT_OPTIONS.filePath)) {
            fs.rmSync(DEFAULT_OPTIONS.filePath)
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
})
