import fs from 'fs' // File System

const MULITIPLICATION_NUMBER = 7

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
            Multiplication table: ${number}
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
    fs.writeFileSync(`${path}${filename}.md`, data)
}

printData({
    filename: `Table ${MULITIPLICATION_NUMBER}`,
    path: './multiplication-tables/',
    data: createTemplateMultiplication(MULITIPLICATION_NUMBER)
})
