import fs from 'fs'

export interface SaveFileOptions {
    extension?:string
    fileName?:string
    fileContent:string
    destination?:string
}

export interface SaveFileUseCase {
    execute: (option:SaveFileOptions) => boolean
}

export class SaveFile implements SaveFileUseCase {
    constructor() {
        /* HERE REPOSITORY */
    }

    execute({
        destination = 'outputs',
        fileName = 'table',
        fileContent,
        extension = 'md'
    }:SaveFileOptions) {
        /*! TEMPORAL: The idea isn't to have dependencies like fs HERE */

        try {
            fs.mkdirSync(destination, {recursive: true})
            fs.writeFileSync(`./${destination}/${fileName}.${extension}`, fileContent)
    
            // const fileCreated = fs.existsSync(`${destination}${fileName}.md`) Option B

            return true
        } catch(error) {
            console.error(error)

            return false
        }
    }
}