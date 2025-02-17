interface CheckServiceUseCase {
    execute(url: string): Promise<Boolean>;
}

export type SuccessCallback = () => void
export type ErrorCallback = (error: string) => void


export class CheckService implements CheckServiceUseCase {
    constructor(
        private readonly successCallback: SuccessCallback,
        private readonly errorCallback: ErrorCallback
    ) {} // Dependencies injection: Manage dependencies between system components in a flexible and decoupled manner, These are injected from the outside, usually through their constructors, methods or properties, avoid adding extra logic to our functions (logic that is not directly related to the main logic of the function)

    public async execute(url: string): Promise<Boolean> {
        try {
            const request = await fetch(url)

            if(!request.ok) throw new Error('The server is down :(')

            console.log(`All good!`)

            this.successCallback()

            return true;
        } catch(error) {
            console.log(`${error}: :(`)

            this.errorCallback('Error from callback')

            return false;
        }
    }
}
