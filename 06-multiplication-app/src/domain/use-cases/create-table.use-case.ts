interface CreateTableProps {
    base:number
    limit?:number
}

interface CreateTableUseCase {
    execute: (props:CreateTableProps) => string
}

export class CreateTable implements CreateTableUseCase {
    constructor(/*DI*/){
        /* Dependency Injection */
    }

    execute({base, limit = 10}:CreateTableProps) {
        let table:string = ''

        for(let i = 1; i <= limit; i++) {
            table += `
                ${i} x ${base} = ${base * i}
            `
        }

        return table
    }
}