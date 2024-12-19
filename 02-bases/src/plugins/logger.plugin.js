import winston from 'winston';

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        // Config files by log level
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/combined.log' }),
    ],
  });

const buildLogger = (service) => {
    return {
        log: (message) => logger.log('info', { message, service })
    }
}

export { buildLogger }
