const fs = require('fs')

let writer = fs.createWriteStream('teste.txt', {flags: 'a'})

for (let i = 0; i < 100000; i++) {
    writer.write(`Bazinga ${i}`)
}