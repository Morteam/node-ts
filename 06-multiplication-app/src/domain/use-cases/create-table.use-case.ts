interface CreateTableOptions {
    base:number
    limit:number
}

interface CreateTableUseCase {
    execute: (options:CreateTableOptions) => string
}

export class CreateTable implements CreateTableUseCase {
    constructor(/*DI*/){
        /* Dependency Injection */
    }

    execute({base, limit}:CreateTableOptions) {
        const HEADER_MESSAGE = 'Multiplication table'

        let table:string = `
        ============================================
        ============================================
                ${HEADER_MESSAGE}: ${base}
        ============================================
        ============================================
        `

        for(let i = 1; i <= limit; i++) {
            table += `
                ${i} x ${base} = ${base * i}
            `
        }

        return table
    }
}