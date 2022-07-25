const http = require('http')

//exemplo sincrono
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page!')
    }

    if (req.url === '/about') {
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`${i} ${j}`)
            }
        }
        res.end('Welcome to our about page!')
    } 
})

server.listen(5000)