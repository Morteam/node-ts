import winston, { format } from 'winston';

const { combine, json, timestamp } = format

const logger = winston.createLogger({
    level: 'info',
    format: combine(
        timestamp(),
        json()
    ),
    defaultMeta: {},
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combine.log' })
    ]
})

// if (process.env.NODE_ENV !== 'production') {
    // Enable the logs on the console
    logger.add(new winston.transports.Console({
      format: winston.format.simple(),
    }));
// }

const buildLogger = (service: string) => {
    return {
        log: (message: string) => {
            logger.log('info', {
                message,
                service
            } )
        },
        error: (message: string) => {
            logger.error('error', {
                message,
                service,
            })
        }
    }
}

export { buildLogger }
