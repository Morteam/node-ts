const winston = require('winston')

const { combine, json, timestamp } = winston.format

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

module.exports = function buildLogger(service) {
    return {
        log: message => {
            logger.log('info', {
                message,
                service
            } )
        },
        error: message => {
            logger.error('error', {
                message,
                service,
            })
        }
    }
}
