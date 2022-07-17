const fs = require('fs')

console.log('exemplo assincrono: start')

fs.readFile('./test.txt', (err, data) => {
    if (err) {
        console.log(err)
    }
    console.log(data.toString())
})

fs.writeFile('./test.txt', 'utilizando o fs.writeFile', () => {
    console.log('Arquivo foi alterado')
})

if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('Diretório criado')
    })
}

if (fs.existsSync('./bazinga.txt')) {
    fs.unlink('./bazinga.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('Arquivo apagado')
    })
}

console.log('exemplo assincrono: starting next task')