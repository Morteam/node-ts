import { describe, expect, jest, test } from '@jest/globals';
import { buildLogger, logger as winstonLogger } from '../../src/plugins/logger.plugin';

describe('plugins/logger', () => {
    test('buildLogger should return a logger function', () => {
        const { error, log } = buildLogger('Sample')
        
        expect(typeof error).toBe('function')
        expect(typeof log).toBe('function')
    })

    test('buildLogger.log should call winston lib', () => {
        const MESSAGE_MOCK = 'Sample test message'
        const SERVICE_NAME_MOCK = 'Sample'

        const winstonLoggerMock = jest.spyOn(winstonLogger, 'log');

        const logger = buildLogger(SERVICE_NAME_MOCK)
        logger.log(MESSAGE_MOCK)

        expect(winstonLoggerMock).toHaveBeenCalledWith('info', expect.objectContaining({ // expect.objectContaining allows us to expect a minimum values without know all values of object
            level: 'info',
            message: MESSAGE_MOCK,
            service: SERVICE_NAME_MOCK
        }))
    })
})
