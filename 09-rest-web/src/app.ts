import http from 'http'; //* Using HTTP

const PORT = 8080

//* Create the web server
const myFirstWebServer = http.createServer((req, res) => {
    console.log('Request ', req);
    console.log('Request ', req.url);

    //* Print
    res.write(`Hi form the moon ${PORT} and ${req.url}`)

    //* Close the response
    res.end()
})

//* Listening the 8080 port in localhost:8080
myFirstWebServer.listen(PORT, () => {
    console.log(`The webserver ${PORT} is running`)
})
