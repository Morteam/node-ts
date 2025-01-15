import winston, { format } from 'winston';

const { combine, json, timestamp } = format;

export const logger = winston.createLogger({
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

export const buildLogger = (service:string) => {
    return {
        log: (message:string) => logger.log('info', { message, service }),
        error: (message:string) => logger.error('error', { message, service })
    }
}
