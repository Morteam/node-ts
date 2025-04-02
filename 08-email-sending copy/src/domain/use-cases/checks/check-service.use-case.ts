import { LogEntity, LogSeverity } from '../../entities/log.entity';
import { LogRepository } from '../../repository/log.repository';

interface CheckServiceUseCase {
    execute(url: string): Promise<Boolean>;
}

export type SuccessCallback = (() => void | undefined)
export type ErrorCallback = ((error: string) => void | undefined)


export class CheckService implements CheckServiceUseCase {
    constructor(
        private readonly logRepository: LogRepository,
        private readonly successCallback: SuccessCallback,
        private readonly errorCallback: ErrorCallback
    ) {} // Dependencies injection: Manage dependencies between system components in a flexible and decoupled manner, These are injected from the outside, usually through their constructors, methods or properties, avoid adding extra logic to our functions (logic that is not directly related to the main logic of the function)

    public async execute(url: string): Promise<Boolean> {
        try {
            const request = await fetch(url)

            if(!request.ok) throw new Error('The server is down :(')

            const logMessage = `Service ${url} working`
            const log = new LogEntity({message: logMessage, level: LogSeverity.low, origin: 'check-service.use-case.ts'})

            this.logRepository.saveLog(log)
            this.successCallback && this.successCallback()

            return true;
        } catch(error) {
            const logMessage = `${error}: ${url} isn't ok`
            const log = new LogEntity({message: logMessage, level: LogSeverity.high, origin: 'check-service.use-case.ts'})

            this.logRepository.saveLog(log)
            this.errorCallback && this.errorCallback(`${error}: :(`)

            return false;
        }
    }
}
