import express from 'express'
import path from 'path';


const PORT = 3000;

export class Server {
    private app = express()

    async start() {
        //* Enable public folder
        this.app.use(express.static('public')) //-- Public refers to the folder 'public'

        //* Fixing routes in SPA
        this.app.get('/{*splat}', async (req, res) => {
            const indexPath = path.join(__dirname, '../../public/index.html')

            res.sendFile(indexPath)
        })

        //* Listening port
        this.app.listen(PORT, () => {
            console.log(`Listening in port ${PORT}`)
        })
    }
}