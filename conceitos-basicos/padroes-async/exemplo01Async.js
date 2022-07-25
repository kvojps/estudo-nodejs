const {readFile} = require('fs')

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

const start = async () => {
    try {
        const first = await getText('./teste.txt')
        const second = await getText('./teste1.txt')
        console.log(first, second)
    } catch (err) {
        console.log(err)
    }
}

// getText('./teste1.txt')
//     .then(result => {console.log(result)})
//     .catch((err) => console.log(err))

start()