interface CheckServiceUseCase {
    execute(url: string): Promise<Boolean>;
}

export class CheckService implements CheckServiceUseCase {
    public async execute(url: string): Promise<Boolean> {

        try {
            const request = await fetch(url)

            if(!request.ok) throw new Error('The server is down :(')

            console.log(`All good!`)

            return true;
        } catch(error) {
            console.log(`${error}: :(`)

            return false;
        }

    }
}
