setTimeout(() => {
    console.log('in the timeout')
    clearInterval(intervalo)
}, 3000)

const intervalo = setInterval(() => {
    console.log('in the interval')
}, 1000)
