import express, { Router } from 'express'
import path from 'path';
import compression from 'compression'


interface ServerOptions {
    port: number,
    publicPath: string,
    routes: Router
}

export class Server {
    private readonly app = express()
    private serverListener?: any;
    private readonly port: number;
    private readonly publicPath: string;
    private readonly routes: Router;

    constructor({port, publicPath, routes}: ServerOptions) {
        this.port = port
        this.publicPath = publicPath
        this.routes = routes
    }

    get getApp() {
        return this.app;
    }

    async start() {
        //* Middlewares
        this.app.use(express.json()) //-- Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.       
        this.app.use(express.urlencoded({ extended: true })) //-- Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option (Useful with bodies with x-www-form-urlencoded)
        this.app.use(compression()) //-- Returns the compression middleware using the given options. The middleware will attempt to compress response bodies for all request that traverse through the middleware, based on the given options.

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
        this.serverListener = this.app.listen(this.port, () => {
            console.log(`Listening in port ${this.port}`)
        })

        console.log({
            port: this.port,
            publicPath: this.publicPath
        })
    }

    close() {
        this.serverListener?.close()
    }
}