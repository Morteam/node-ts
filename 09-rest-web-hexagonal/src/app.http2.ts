import http2 from 'http2' //* Using HTTP2
import fs from 'fs'

const PORT = 8080

//* Create the web server using HTTP2, for run this in local is necessary:
//* Edit the environment variable of Window (SO) called PATH and add 'C:\Program Files\Git\usr\bin'
//* Run this command from window powershell 'openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout server.key -out server.crt' in the terminal (https://gist.github.com/Klerith/bc65ca4f398cadd7f292c26a04d62012)
//* Continue with the steps
//* Add the files into a keys folder in the project
//* Called the keys in the createSecureSever options
//* Run the project
//* Enter https://localhost:8080/
const myFirstWebServer = http2.createSecureServer({
    key: fs.readFileSync('./keys/server.key'),
    cert: fs.readFileSync('./keys/server.crt'),
}, (req, res) => {
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

        try {
            const contenType = Object.keys(FILE_DIRECTORY).find(file => urlPath.includes(`/${file}/`)) as FileTypeKey; //? Better with .endsWith
            const contenType2 = contenType ? FILE_DIRECTORY[contenType] : 'text/html'

            const file = fs.readFileSync(`./public/${urlPath}`, 'utf-8')

        
            res.writeHead(200, {'content-type': contenType2})
            res.end(file)
        } catch(error) {
            res.writeHead(404, {'content-type': 'text/html'})
            res.end()
        }

    }



    //* Close the response
    // res.end()
})

//* Listening the 8080 port in localhost:8080
myFirstWebServer.listen(PORT, () => {
    console.log(`The webserver ${PORT} is running`)
})
