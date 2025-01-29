import { CreateTable } from '@/domain/use-cases/create-table.use-case'

interface ServerProps {
    base:number
    limit:number
    showTable?:boolean
}

export class ServerApp {
    static run({base, limit, showTable}:ServerProps) {
        const multiplicationTable = new CreateTable().execute({base, limit})

        if(showTable) console.log(multiplicationTable)

        return multiplicationTable
    }
}
