import express, { Router } from 'express'
import path from 'path';


interface ServerOptions {
    port: number,
    publicPath: string,
    routes: Router
}

export class Server {
    private app = express()
    private readonly port: number;
    private readonly publicPath: string;
    private readonly routes: Router;

    constructor({port, publicPath, routes}: ServerOptions) {
        this.port = port
        this.publicPath = publicPath
        this.routes = routes
    }

    async start() {
        //* Enable public folder
        this.app.use(express.static(this.publicPath)) //-- Public refers to the folder 'public'

        //* Routes
        this.app.use( this.routes )

        //* Fixing routes in SPA
        this.app.get('/{*splat}', async (req, res) => {
            const indexPath = path.join(__dirname, `../../${this.publicPath}/index.html`)

            res.sendFile(indexPath)
        })

        //* Listening port
        this.app.listen(this.port, () => {
            console.log(`Listening in port ${this.port}`)
        })

        console.log({
            port: this.port,
            publicPath: this.publicPath
        })
    }
}