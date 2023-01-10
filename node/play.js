const fetchData = callback => {
    setTimeout(() => {
        callback('Done!')
    }, 1500)
}

setTimeout(() => {
    console.log('Timer Is Done')
    fetchData(text => {
        console.log(text)
    })
}, 4000)

console.log('Helo')
console.log('Hi')