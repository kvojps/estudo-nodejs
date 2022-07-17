const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./test1.txt', 'utf8')
const second = readFileSync('./test2.txt', 'utf8')

writeFileSync(
    './result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'}
)