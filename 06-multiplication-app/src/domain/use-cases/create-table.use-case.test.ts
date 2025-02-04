import {describe, expect, test} from '@jest/globals';
import {CreateTable} from '@/domain/use-cases/create-table.use-case' // Review TS Config

describe('CreateTableUseCase', () => {
    test('Should call CreateTable with default values', () => {
        const BASE = 9;
        const TITLE_BREAKLINES = 6;
        const DEFAULT_LIMIT = 10;

        const table = new CreateTable()
        const multiplicationTable = table.execute({base: BASE});
        const rows = multiplicationTable.split('\n').length;

        expect(table).toBeInstanceOf(CreateTable)
        expect(multiplicationTable).toContain('1 x 9 = 9')
        expect(multiplicationTable).toContain('10 x 9 = 90')
        expect(rows).toBe(TITLE_BREAKLINES + DEFAULT_LIMIT)
    })

    test('Should call CreateTable with custom values', () => {
        const MOCKED_OPTIONS = {
            base: 7,
            limit: 16
        }
        const TITLE_BREAKLINES = 6;

        const table = new CreateTable()
        const multiplicationTable = table.execute(MOCKED_OPTIONS);
        const rows = multiplicationTable.split('\n').length;

        expect(multiplicationTable).toContain('1 x 7 = 7')
        expect(multiplicationTable).toContain('10 x 7 = 70')
        expect(multiplicationTable).toContain('16 x 7 = 112')
        expect(rows).toBe(TITLE_BREAKLINES + MOCKED_OPTIONS.limit)
    })
})
