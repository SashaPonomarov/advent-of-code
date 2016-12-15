let input = require('./input.js'),
    disks = input.split('\n').map(line => {
        let words = line.split(' ')
        return [+words[3], +words[11].slice(0,-1)]
    }),
    time = 0,
    fall = false

while (!fall) {
    let localTime = time
    fall = disks.every(disk => {
        localTime++
        return !((disk[1] + localTime) % disk[0])
    })
    time++
}
console.log(time-1)