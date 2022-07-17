const fs = require('fs')

//lendo arquivos
fs.readFile('./test.txt', (err, data) => {
    if (err) {
        console.log(err)
    }
    console.log(data.toString())
})