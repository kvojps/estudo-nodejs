// console.log(global)

// global.setTimeout(() => {
//     console.log('in the timeout')
// }, 3000)

setTimeout(() => {
    console.log('in the timeout')
    clearInterval(intervalo)
}, 3000)

const intervalo = setInterval(() => {
    console.log('in the interval')
}, 1000)

console.log(__dirname)
console.log(__filename)