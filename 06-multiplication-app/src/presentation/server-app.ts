import { CreateTable } from '@/domain/use-cases/create-table.use-case'
import { SaveFile } from '@/domain/use-cases/save-file.use-case'

interface ServerProps {
    base:number
    limit:number
    destination:string
    extension:string
    filename:string
    showTable?:boolean
}

export class ServerApp {
    static run({base, destination, extension, filename, limit, showTable = false}:ServerProps) {
        console.log('Running 🏃‍♂️‍➡️🏃‍♂️‍➡️')

        const multiplicationTable = new CreateTable().execute({base, limit})
        const wasFileCreated = new SaveFile().execute({
            fileContent: multiplicationTable,
            fileName: filename,
            destination,
            extension
        })

        if (showTable) console.log(multiplicationTable)

        if (wasFileCreated) {
            console.log('File created!')
        } else {
            console.error('Error!')
        }
    }
}
