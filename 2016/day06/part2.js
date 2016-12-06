let input = require('./input.js')
let lines = input.split('\n')
let counts = [{},{},{},{},{},{},{},{}]
lines.map(line => {
    [...line].map((char, i) => {
        counts[i][char] = counts[i][char] ? counts[i][char]+1 : 1 
    })
})
let message = counts.map(count => {
    return Object.keys(count).sort((a,b)=>count[a]-count[b])[0]
}).join('')