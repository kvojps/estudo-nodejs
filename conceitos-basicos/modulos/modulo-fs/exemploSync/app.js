const {readFileSync, writeFileSync} = require('fs')

console.log('exemplo sincrono: start')
const first = readFileSync('./test1.txt', 'utf8')
const second = readFileSync('./test2.txt', 'utf8')

writeFileSync(
    './result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'}
)
console.log('exemplo sincorno: done')