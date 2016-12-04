let input = require('./input.js')
let lines = input.split('\n')
let rooms = lines.map(line => {
    return line.match(/((?:[a-z]+\-)+)(\d+)\[([a-z]+)\]/).slice(1)
})
let codes = []
rooms.forEach(room => {
    let code = room[0].replace(/-/g, '')
    let counts = [...code].reduce((counts, char)=>{
        counts[char] = counts[char] ? counts[char]+1 : 1 
        return counts
    },{})
    let sorted = Object.keys(counts).sort((a,b) => {
        return (counts[b] - counts[a]) || ((a>b) ? 1 : -1) 
    })
    if (sorted.join('').slice(0,5) === room[2]) {
        codes.push(room[1])
    }
})
let result = codes.reduce((sum, num) => sum + parseInt(num, 10), 0) 
