let input = require('./input.js')
let digits = input.split('')
let len = digits.length
let firstPart = digits.filter((d, i) => d == digits[(i+1)%len])
let secondPart = digits.filter((d, i) => d == digits[(i+len/2)%len])

console.log('first part:', firstPart.reduce((a,b)=>parseInt(a)+parseInt(b)))
console.log('second part:', secondPart.reduce((a,b)=>parseInt(a)+parseInt(b)))