import winston, { format } from 'winston';

const { combine, json, timestamp } = format;

const logger = winston.createLogger({
    level: 'info',
    format: combine(
        timestamp(),
        json(), // The last parameter because it prints all data in the log files
    ),
    transports: [
        // Config files by log level
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/combined.log' }),
    ],
  });

// Additional print in the traditional console
logger.add(new winston.transports.Console({
    format: winston.format.simple()
}))

const buildLogger = (service) => {
    return {
        log: (message) => logger.log('info', { message, service }),
        error: (message) => logger.error('error', { message, service })
    }
}

export { buildLogger }
