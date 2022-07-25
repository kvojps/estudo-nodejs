const {readFile, writeFile} = require('fs')
const util = require('util')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

const start = async () => {
    try {
        const first = await readFilePromise('./teste.txt', 'utf8');
        const second = await readFilePromise('./teste1.txt', 'utf8')
        console.log(first, second)
        await writeFilePromise('./testeWrite.txt', `${first} , ${second} bazinga`)
    } catch (err) {
        console.log(err)
    }
}

// getText('./teste1.txt')
//     .then(result => {console.log(result)})
//     .catch((err) => console.log(err))

start()