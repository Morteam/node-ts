import fs from 'fs' // File System

const MULITIPLICATION_NUMBER = 11
const HEADER_MESSAGE = 'Multiplication table'

const createMultiplicationTable = (base:number, limit:number = 10):string => {
    let table:string = ''

    for(let i = 1; i <= limit; i++) {
        table += `
            ${i} x ${base} = ${base * i}
        `
    }

    return table
}

export const createTemplateMultiplication = (base:number, limit?:number):string => {
    return `
    ============================================
    ============================================
            ${HEADER_MESSAGE}: ${base}
    ============================================
    ============================================

    ${createMultiplicationTable(base, limit)}
    `
}

interface PrintDataProps {
    filename:string
    path:string
    data:string
}

export const printData = ({filename, path, data}:PrintDataProps) => {
    fs.mkdirSync(path, {recursive: true}) // Create folders if they don't exist
    fs.writeFileSync(`${path}${filename}.md`, data)
}

// printData({
//     filename: `Table ${MULITIPLICATION_NUMBER}`,
//     path: './outputs/',
//     data: createTemplateMultiplication(MULITIPLICATION_NUMBER)
// })
