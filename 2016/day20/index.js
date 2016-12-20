let input = require('./input.js')
let ranges = input.split(`\n`)
            .map(line => line.split('-').map(n => +n))

ranges.sort((a,b) => a[0] - b[0])
ranges = ranges.reduce((prev, range) => {
    if (range[0] <= prev[0][1] + 1) {
        if (range[1] > prev[0][1]) {
            prev[0][1] = range[1]
        }
    } else {
        prev.unshift(range)
    }
    return prev
}, [[0, 0]]).reverse()

let allowed = ranges.reduce((sum, range) => {
    return [range[0] - sum[1] - 1 + sum[0], range[1]]  
}, [0, -1])[0]

console.log('part 1:', ranges[0][1]+1)
console.log('part 2:', allowed)