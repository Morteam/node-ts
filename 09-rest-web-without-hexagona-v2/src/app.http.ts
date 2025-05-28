import http from 'http' //* Using HTTP
import fs from 'fs'

const PORT = 8080

//* Create the web server
const myFirstWebServer = http.createServer((req, res) => {
    // console.log('Request ', req);
    console.log('Request ', req.url);

    //* Modify the response
    //- Response with HTML (One way of do SSR)
    // res.writeHead(200, {'content-type': 'text/html'})
    // res.write(`<h1>Hi form the moon ${PORT} and ${req.url}</h1>`)
    // Close the response
    // res.end()

    //- Response with JSON
    // const PERSON = {
    //     name: 'Joshua',
    //     country: 'Netherlands',
    //     color: 'Orange'
    // }
    // res.writeHead(200, {'content-type': 'application/json'})
    // res.write(JSON.stringify(PERSON))
    // Close the response
    // res.end()

    //- Response with basic routing
    const urlPath = req.url!

    // if (urlPath === '/') {
    //     const fileHTML = fs.readFileSync('./public/index.html', 'utf-8')

    //     res.writeHead(200, {'content-type': 'text/html'})
    //     res.end(fileHTML)
    // } else if(urlPath.includes('/styles/')){
    //     const fileStyle = fs.readFileSync('./public/styles/style.css', 'utf-8')

    //     res.writeHead(200, {'content-type': 'text/css'})
    //     res.end(fileStyle)
    // } else if(urlPath.includes('/js/')){
    //     const fileJs = fs.readFileSync('./public/js/script.js', 'utf-8')

    //     res.writeHead(200, {'content-type': 'application/js'})
    //     res.end(fileJs)
    // } else {
    //     res.writeHead(404, {'content-type': 'text/html'})
    //     res.end()
    // }

    // - Response with basic routing (Other way)
    if (urlPath === '/') {
        const fileHTML = fs.readFileSync('./public/index.html', 'utf-8')

        res.writeHead(200, {'content-type': 'text/html'})
        res.end(fileHTML)
    } else {
        const FILE_DIRECTORY = {
            styles: 'text/css',
            js: 'application/js'
        }

        type FileTypeKey = keyof typeof FILE_DIRECTORY

        const contenType = Object.keys(FILE_DIRECTORY).find(file => urlPath.includes(`/${file}/`)) as FileTypeKey; //? Better with .endsWith
        const contenType2 = contenType ? FILE_DIRECTORY[contenType] : 'text/html'

        const file = fs.readFileSync(`./public/${urlPath}`, 'utf-8')

        res.writeHead(200, {'content-type': contenType2})
        res.end(file)
    }



    //* Close the response
    // res.end()
})

//* Listening the 8080 port in localhost:8080
myFirstWebServer.listen(PORT, () => {
    console.log(`The webserver ${PORT} is running`)
})
