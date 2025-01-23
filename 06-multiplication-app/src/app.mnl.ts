import fs from 'fs' // File System

const MULITIPLICATION_NUMBER = 11
const HEADER_MESSAGE = 'Multiplication table'

const createMultiplicationTable = (number:number, multiplier:number = 10):string => {
    let table:string = ''

    for(let i = 1; i <= multiplier; i++) {
        table += `
            ${i} x ${number} = ${number * i}
        `
    }

    return table
}

const createTemplateMultiplication = (number:number, multiplier?:number):string => {
    return `
    ============================================
    ============================================
            ${HEADER_MESSAGE}: ${number}
    ============================================
    ============================================

    ${createMultiplicationTable(number, multiplier)}
    `
}

interface PrintDataProps {
    filename:string
    path:string
    data:string
}

const printData = ({filename, path, data}:PrintDataProps) => {
    fs.mkdirSync(path, {recursive: true}) // Create folders if they don't exist
    fs.writeFileSync(`${path}${filename}.md`, data)
}

printData({
    filename: `Table ${MULITIPLICATION_NUMBER}`,
    path: './outputs/',
    data: createTemplateMultiplication(MULITIPLICATION_NUMBER)
})
